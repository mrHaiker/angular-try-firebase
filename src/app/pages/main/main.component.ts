import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Observable } from 'rxjs/Observable';
import { Order, OrderStatus, OrderTrend, TradeService } from '../../services/trade.service';
import { LocalStorage, StorageService } from '../../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/timer';
import { Subscription } from 'rxjs/Subscription';


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
  public availableMoney: number;
  public settings: boolean;
  public keys: FormGroup;

  private checkedPosition: boolean;
  private config = this.storage.get(LocalStorage.SETTINGS) || {
    loss: 0.5,
    profit: 1,
    step: 0.2,
    hardOut: 10
  };
  private listener: Subscription;

  constructor(
    private storage: StorageService,
    private main: MainService,
    private trade: TradeService,
    private fb: FormBuilder,
  ) { }

  get historyProfit() {
    let profit = 0;
    this.trade.history.map(val => profit += val.profit);
    return profit;
  }
  get profit(): number {
    return this.currencyProfit + this.historyProfit;
  }
  get step(): number {
    return Number(((this.availableMoney - this.availableMoney / 100 * 15) / this.price / this.config.hardOut).toFixed(2));
  }
  get BTCPrice(): number {
    return Number(this.trade.BTC ? this.trade.BTC.last : 0);
  }
  get history(): Order[] {
    if (this.list.length > 20) {
      this.list.length = 20;
      return this.list;
    } else {
      return this.list;
    }
  }


  ngOnInit() {
    this.storage.set(LocalStorage.COIN, this.coin);

    this.priceListener();
    this.createTempForm();

    this.main.getUserData().subscribe(
      users => {
        this.keys.patchValue(users[0]);
        this.getAvailableMoney();
      }
    );

    this.checkPosition().then(() => {
      Observable.timer(1, 1000).subscribe((val) => this.cycle(val));
    });

    Observable.timer(1, 30000).subscribe(() => {
      if (this.keys.invalid) return;
      this.trade.getTradableBalances(this.keys.value).subscribe();
    });
  }

  getAvailableMoney() {
    this.trade.getTradableBalances(this.keys.value).subscribe(
      val => this.availableMoney =  Number(val['BTC_STR']['BTC'])
    )
  }

  getBalance(): void {
    this.trade.getBalance(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  getCompleteBalances(): void {
    this.trade.getCompleteBalances(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  getOpenOrders(): void {
    this.trade.getOpenOrders(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  getAvailableAccountBalances(): void {
    this.trade.getAvailableAccountBalances(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  getTradableBalances(): void {
    this.trade.getTradableBalances(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  getMarginAccountSummary(): void {
    this.trade.getMarginAccountSummary(this.keys.value).subscribe(value => console.log('balance value', value));
  }

  buy() {
    this.trade.marginBuy(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
      rate: 0.00004614,
      amount: 400,
      lendingRate: 0.05
    }).subscribe(
      val => console.log('val', val)
    )
  }

  getPosa() {
    this.trade.getMarginPosition(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
    }).subscribe(
      val => console.log('val', val)
    )
  }

  closePosa() {
    this.trade.closeMarginPosition(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
    }).subscribe(
      val => console.log('close val', val)
    )
  }

  stop() {
    console.log('listener was stopped');
    this.listener.unsubscribe();
  }

  cycle(data?: number): void {
    if (!this.price && !this.availableMoney) return console.log('unavailable currently price');

    this.currencyProfit = this.getCurrProfitInPer();

    if (this.order.trend === OrderTrend.WAIT) {
      if ((this.price - this.order.open) / this.price * 100 <= this.config.loss * -1)
        this.openPosition(OrderTrend.SHORT);

      if ((this.price - this.order.open) / this.price * 100 >= this.config.loss)
        this.openPosition(OrderTrend.LONG);

    } else {
      (this.currencyProfit * 100) <= this.config.loss * -1 ? this.invertPosition() :
        (this.currencyProfit * 100) >= this.config.profit ? this.closePosition() : null;
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
    const rate = this.price / 100 * 3;
    this.trade.marginBuy(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
      rate: trend === OrderTrend.SHORT ? Number(this.price) - rate : Number(this.price) + rate,
      amount: count,
      lendingRate: 0.05
    }).subscribe(
      val => {
        console.log('Position was closed', val);
        this.trade.openPosition(this.price, trend, count);
        this.checkPosition(true);
      }
    );
  }

  closePosition(): void {
    this.trade.closeMarginPosition(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
    }).subscribe(
      val => {
        console.log('Position was closed', val);
        this.trade.closePosition(this.price, this.order);

        this.order = this.trade.openPosition(this.price, OrderTrend.WAIT, 0);
        this.checkPosition(true);
      }
    )
  }

  getCurrProfitInPer(): number {
    return this.updateCurrencyProfit(this.order).profit / (this.order.open * this.order.count);
  }

  updateCurrencyProfit(order: Order): Order {
    if (order.status !== OrderStatus.OPEN) return;

    order.profit = (this.price - order.open) * order.count * order.trend;
    return order;
  }

  openPopup(open = true): void {
    if (!open) this.storage.set(LocalStorage.SETTINGS, this.config);

    this.settings = open;
  }

  currency(take: string, get: string): string {
    return `${take}_${get}`;
  }


  private priceListener(): void {
    this.listener = this.trade.currencies$.subscribe(
      val => {
        const currency = val['BTC_STR'];
        this.price = currency.last;
      }
    );
  }

  private checkPosition(force?: boolean): Promise<boolean> {
    return new Promise(resolve => {
      if (this.checkedPosition && !force) return;

      if (!this.step) {
        return setTimeout(() => {
          this.checkPosition().then(() => {
            Observable.timer(1, 1000).subscribe((val) => this.cycle(val));
          })
        }, 1000);
      }

      this.list = this.trade.history;
      !this.trade.position ? this.openPosition(OrderTrend.LONG) : this.list.unshift(this.order = this.trade.position);

      resolve(this.checkedPosition = true)
    })
  }

  private createTempForm() {
    this.keys = this.fb.group({
      key: ['', Validators.required],
      secret: ['', Validators.required]
    })
  }
}
