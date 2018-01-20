import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Order, OrderStatus, OrderTrend, TradeService } from '../services/trade.service';
import { LocalStorage, StorageService } from '../services/storage.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public price: number;
  public currencyProfit: number;
  public coin = this.storage.get(LocalStorage.COIN) || 'BTC';
  public list: Order[] = this.trade.history;
  public order: Order;
  public availableMoney = 10000;
  public settings: boolean;

  private config = this.storage.get(LocalStorage.SETTINGS) || {
    loss: 0.1,
    profit: 0.5,
    step: 0.1,
    hardOut: 10
  };

  private checkedPosition: boolean;
  constructor(
    private storage: StorageService,
    private main: MainService,
    private trade: TradeService
  ) { }

  get historyProfit() {
    let profit = 0;
    this.trade.history.map(val => profit += val.profit);
    return profit;
  }

  get profit(): number {
    return this.currencyProfit + this.historyProfit
  }

  get step(): number {
    return Number((this.availableMoney / this.price / this.config.hardOut).toFixed(2));
  }


  ngOnInit() {
    this.storage.set(LocalStorage.COIN, this.coin);

    this.priceListener();
    Observable.timer(1, 1000).subscribe((val) => this.cycle(val));
  }



  cycle(data?: number): void {
    if (!this.price) return console.log('unavailable currently price');

    this.currencyProfit = this.getCurrProfitInPer();

    if (this.order.trend === OrderTrend.WAIT) {
      if ((this.price - this.order.open) / this.price * 100 <= this.config.loss * -1)
        this.openPosition(OrderTrend.SHORT);

      if ((this.price - this.order.open) / this.price * 100 >= this.config.loss)
        this.openPosition(OrderTrend.LONG);

    } else {
      (this.currencyProfit *100) <= this.config.loss * -1 ? this.invertPosition() :
        (this.currencyProfit *100) >= this.config.profit ? this.closePosition() : null;
    }

  }

  invertPosition(): void {
    if (this.order.count === this.config.hardOut) return this.closePosition();

    const trend = this.order.trend === OrderTrend.SHORT ? OrderTrend.LONG : OrderTrend.SHORT;
    const position = this.order.count + this.step;

    this.trade.closePosition(this.price, this.order);
    this.openPosition(trend, position);
  }

  openPosition(trend: OrderTrend, count = this.step): void {
    this.trade.openPosition(this.price, trend, count);
    this.checkPosition(true);
  }

  closePosition(): void {
    this.trade.closePosition(this.price, this.order);
    this.order = this.trade.openPosition(this.price, OrderTrend.WAIT, 0);
    this.checkPosition(true);
  }

  getCurrProfitInPer(): number {
    return this.updateCurrencyProfit(this.order).profit / (this.order.open * this.order.count);
  }

  updateCurrencyProfit(order: Order): Order {
    if (order.status !== OrderStatus.OPEN) return;

    order.profit = (this.price - order.open) * order.count * order.trend;
    return order
  }

  openPopup(open = true): void {
    if (!open) this.storage.set(LocalStorage.SETTINGS, this.config);

    this.settings = open;
  }


  private priceListener(): void {
    Observable.timer(1, 10000).subscribe(
      () => this.main.getPrice(this.coin).subscribe(
        val => this.price = Number(val.USD)
      ).add(
        () => this.checkPosition()
      )
    )
  }

  private checkPosition(force?: boolean): void {
    if (this.checkedPosition && !force) return;

    this.list = this.trade.history;
    !this.trade.position ? this.openPosition(OrderTrend.LONG) : this.list.unshift(this.order = this.trade.position);

    this.checkedPosition = true;
  }
}
