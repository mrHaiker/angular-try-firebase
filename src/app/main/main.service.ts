import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

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


@Injectable()
export class MainService {
  public currencies$ = new Subject<PriceResponse>();

  private _BTC: PriceResponse;
  constructor(
    private http: HttpClient
  ) {
    this.connectToTicketsStream();
  }

  get BTC(): PriceResponse {
    return this._BTC;
  }

  connectToTicketsStream(): void {
    console.log('try to connectToTicketsStream', environment.server);

    const ws = new WebSocket(`ws:${environment.server}/tickets`);
    ws.onmessage = (ev) => {
      const response = JSON.parse(ev.data).res;
      this._BTC = response['USDT_BTC'];
      this.currencies$.next(response);
    }
  }

  getBalance(): Observable<any> {
    return this.http.post(`${'//localhost:3000/api'}/getBalance`, {
      key: 'adawdwad',
      secret: 'adwadaw12312d',
    })
  }
}
