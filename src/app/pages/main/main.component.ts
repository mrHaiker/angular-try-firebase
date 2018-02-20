import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Observable } from 'rxjs/Observable';
import { Order, OrderStatus, OrderTrend, PriceResponse, TradeService } from '../../services/trade.service';
import { LocalStorage, StorageService } from '../../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/timer';
import { Subscription } from 'rxjs/Subscription';
import { isUndefined } from 'util';
import { AuthService } from '../auth/auth.service';


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
  public currency: PriceResponse;

  private checkedPosition: boolean;
  private config = this.storage.get(LocalStorage.SETTINGS) || {
    loss: 1,
    profit: 5,
    step: 0.2,
    hardOut: 10
  };
  private listener: Subscription;
  private positionStep: number;
  private waitEndsOrdering: boolean;

  constructor(
    private storage: StorageService,
    private main: MainService,
    private trade: TradeService,
    private auth: AuthService,
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
      user => {
        this.keys.patchValue(user);
        this.getAvailableMoney();
      }
    );

    this.checkPosition().then(() => {
      Observable.timer(1, 1000).subscribe(() => this.cycle());
    });

    Observable.timer(1, 30000).subscribe(() => {
      if (this.keys.invalid) return;
      this.trade.getTradableBalances(this.keys.value).subscribe();
    });
  }

  getAvailableMoney() {
    this.trade.getMarginAccountSummary(this.keys.value).subscribe(
      val => this.availableMoney =  Number(val.totalValue) * 2.5
    );
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
    );
  }

  getPosa() {
    this.trade.getMarginPosition(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
    }).subscribe(
      val => console.log('val', val)
    );
  }

  closePosa() {
    this.trade.closeMarginPosition(this.keys.value, {
      currencyA: 'BTC',
      currencyB: 'STR',
    }).subscribe(
      val => console.log('close val', val)
    );
  }

  stop() {
    console.log('listener was stopped');
    this.listener.unsubscribe();
  }

  cycle(): void {
    if (this.waitEndsOrdering) return;

    if (isUndefined(this.price) || isUndefined(this.availableMoney) || isUndefined(this.order)) {
      return console.log('unavailable currently price');
    }

    if (this.order.status !== OrderStatus.OPEN) return;


    this.currencyProfit = this.getCurrProfitInPer();

    if (this.order.trend === OrderTrend.WAIT) {
      if ((Number(this.currency.highestBid) - this.order.open) / this.price * 100 <= this.config.loss * -1)
        this.openPosition(OrderTrend.SHORT);

      if ((Number(this.currency.lowestAsk) - this.order.open) / this.price * 100 >= this.config.loss)
        this.openPosition(OrderTrend.LONG);

    } else {
      (this.currencyProfit * 100) <= this.config.loss * -1 ? this.invertPosition() :
        (this.currencyProfit * 100) >= this.config.profit ? this.closePosition() : null;
    }

  }

  invertPosition(): void {
    console.log('invertPosition', {
      count: this.order.count,
      hardOutByStep: this.config.hardOut * this.step,
      step: this.step,
      positionStep: this.positionStep,
    });
    if (this.order.count >= this.config.hardOut * (this.positionStep || this.step)) return this.closePosition();

    const trend = this.order.trend === OrderTrend.SHORT ? OrderTrend.LONG : OrderTrend.SHORT;
    const count = this.order.count + (this.positionStep || this.step);

    this.waitEndsOrdering = true;
    this.trade.closePosition(this.keys.value, this.price, this.order).subscribe(
      (val) => {
        this.openPosition(trend, count);
        this.waitEndsOrdering = false;
      }
    );
  }

  // Open Short of Long Position
  openPosition(trend: OrderTrend, count = this.step): void {
    this.waitEndsOrdering = true;

    this.positionStep = this.step;
    let rate = this.price;
    if (this.order && this.order.trend === OrderTrend.WAIT) {
      rate = trend === OrderTrend.SHORT ? Number(this.currency.highestBid) : Number(this.currency.lowestAsk);
    }

    this.trade.openPosition(this.keys.value, rate, trend, count).subscribe(
      (val) => this.checkPosition(true)
    ).add(() => this.waitEndsOrdering = false);
  }

  // Close by SUCCESS
  closePosition(): void {
    this.waitEndsOrdering = true;

    this.trade.closePosition(this.keys.value, this.price, this.order).subscribe(
      val => {
        this.order = this.trade.waitPosition(this.price, OrderTrend.WAIT, 0);
        this.checkPosition(true);
      }
    ).add(() => this.waitEndsOrdering = false);
  }

  getCurrProfitInPer(): number {
    return this.updateCurrencyProfit(this.order).profit / (this.order.open * this.order.count);
  }

  updateCurrencyProfit(order: Order): Order {
    if (order.status !== OrderStatus.OPEN) return order;

    order.profit = (this.price - order.open) * order.count * order.trend;
    return order;
  }

  openPopup(open = true): void {
    if (!open) this.storage.set(LocalStorage.SETTINGS, this.config);

    this.settings = open;
  }


  private priceListener(): void {
    this.listener = this.trade.currencies$.subscribe(
      val => {
        const currency: PriceResponse = this.currency = val['BTC_STR'];

        if (isUndefined(currency)) return;
        this.price = (this.order && currency) ?
          this.order.trend === OrderTrend.LONG ? Number(currency.highestBid) : Number(currency.lowestAsk) :
          Number(currency.last);
      }
    );
  }

  private checkPosition(force?: boolean): Promise<boolean> {
    return new Promise(resolve => {
      if (this.checkedPosition && !force) return;

      if (!this.step) {
        return setTimeout(() => {
          this.checkPosition().then(() => {
            Observable.timer(1, 1000).subscribe(() => this.cycle());
          });
        }, 1000);
      }

      this.list = this.trade.history;
      !this.trade.position ? this.openPosition(OrderTrend.LONG) : this.list.unshift(this.order = this.trade.position);

      resolve(this.checkedPosition = true);
    });
  }

  private createTempForm() {
    this.keys = this.fb.group({
      key: ['', Validators.required],
      secret: ['', Validators.required]
    });
  }
}
