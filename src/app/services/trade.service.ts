import { Injectable } from '@angular/core';
import { LocalStorage, StorageService } from './storage.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';


export class Order {
  open: number;
  close: number;
  profit: number;
  count: number;
  status: OrderStatus;
  trend: OrderTrend;
  constructor(data) {
    this.open = data.open;
    this.close = data.close;
    this.profit = data.profit;
    this.count = data.count;
    this.status = data.status;
    this.trend = data.trend;
  }
}


export enum OrderStatus {
  CLOSE = 0,
  OPEN = 1
}

export enum OrderTrend {
  LONG = 1,
  SHORT = -1,
  WAIT = 0
}

export class PriceResponse {
  aseVolume: string;
  high24hr: string;
  highestBid: string;
  id: number;
  isFrozen: string;
  last: string;
  low24hr: string;
  lowestAsk: string;
  percentChange: string;
  quoteVolume: string;
}

export class RequestParams {
  key: string;
  secret: string;
}

@Injectable()
export class TradeService {
  public currencies$ = new Subject<PriceResponse>();

  private _BTC: PriceResponse;
  constructor(
    private storage: StorageService,
    private http: HttpClient,
  ) {
    this.connectToTicketsStream();

    this.currencies$.debounceTime(10000).subscribe(() => console.warn('Was broken connection to WS Tickets stream'))
  }

  get BTC(): PriceResponse {
    return this._BTC;
  }
  get position(): Order {
    return this.storage.get(LocalStorage.POSITION);
  }
  get history(): Order[] {
    return this.storage.get(LocalStorage.HISTORY) || [];
  }


  openPosition(price: number, trend: OrderTrend, count): Order {
    const order = new Order({open: price, trend, count, status: OrderStatus.OPEN});

    console.log('order', order);

    this.storage.set(LocalStorage.POSITION, order);
    return order;
  }

  closePosition(price: number, order: Order): Order {
    order.close = price;
    order.status = OrderStatus.CLOSE;

    const history = this.history;
    history.unshift(order);
    this.storage.set(LocalStorage.HISTORY, history);

    return order;
  }


  // Api methods

  connectToTicketsStream(): void {
    console.log('try to connectToTicketsStream', environment.server);

    const ws = new WebSocket(`ws:${environment.server}/tickets`);
    ws.onmessage = (ev) => {
      const response = JSON.parse(ev.data).res;
      this._BTC = response['USDT_BTC'];
      this.currencies$.next(response);
    }
  }

  getBalance(value: RequestParams): Observable<any> {
    return this.http.post(`${environment.server}/getBalance`, {
      key: value.key,
      secret: value.secret,
    })
  }

  getCompleteBalances(value: RequestParams): Observable<any> {
    return this.http.post(`${environment.server}/getCompleteBalances`, {
      key: value.key,
      secret: value.secret,
    })
  }

  getOpenOrders(value: RequestParams): Observable<any> {
    return this.http.post(`${environment.server}/getOpenOrders`, {
      key: value.key,
      secret: value.secret,
    })
  }

  getAvailableAccountBalances(value: RequestParams): Observable<any> {
    return this.http.post(`${environment.server}/getAvailableAccountBalances`, {
      key: value.key,
      secret: value.secret,
    })
  }

  getTradableBalances(value: RequestParams): Observable<any> {
    // const options = this._getRequestOptionArgs();

    return this.http.post(`${environment.server}/getTradableBalances`, {
      key: value.key,
      secret: value.secret,
    })
  }

  getMarginAccountSummary(value: RequestParams): Observable<any> {
    return this.http.post(`${environment.server}/getMarginAccountSummary`, {
      key: value.key,
      secret: value.secret,
    })
  }

  marginBuy(value: RequestParams, params: MarginOffer): Observable<any> {
    return this.http.post(`${environment.server}/marginBuy`, {
      key: value.key,
      secret: value.secret,
      currencyA: params.currencyA,
      currencyB: params.currencyB,
      rate: params.rate,
      amount: params.amount,
      lendingRate: params.lendingRate,
    })
  }


}

export class MarginOffer {
  currencyA: string;
  currencyB: string;
  rate: number;
  amount: number;
  lendingRate: number;
}
