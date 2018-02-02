import { Injectable } from '@angular/core';
import { LocalStorage, StorageService } from './storage.service';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export enum OrderStatus {
  CLOSE = 0,
  OPEN = 1
}

export enum OrderTrend {
  LONG = 1,
  SHORT = -1,
  WAIT = 0
}


@Injectable()
export class TradeService {
  public ticketsStream$ = new Subject<any>();

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) {
    this.connectToTicketsStream();
  }

  get position(): Order {
    return this.storage.get(LocalStorage.POSITION);
  }
  get history(): Order[] {
    return this.storage.get(LocalStorage.HISTORY) || [];
  }


  openPosition(price: number, trend: OrderTrend, count): Order {
    const order = new Order({open: price, trend, count, status: OrderStatus.OPEN});
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

  connectToTicketsStream(): void {
    console.log('try to connectToTicketsStream', environment.server);

    const ws = new WebSocket(`ws:${environment.server}/tickets`);
    ws.onmessage = (ev) => this.ticketsStream$.next(JSON.parse(ev.data));
  }

  getPair(): Observable<any> {
    return this.http.post(environment.server + '/returnTickets', {pair: 'BTC_STR'});
  }
}

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
