import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';

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

export class UserFireData {
  key: string;
  secret: string;
}


@Injectable()
export class MainService {
  public currencies$ = new Subject<PriceResponse>();

  private _BTC: PriceResponse;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.connectToTicketsStream();
  }

  get BTC(): PriceResponse {
    return this._BTC;
  }

  getUserData(): Observable<UserFireData[]> {
    return this.afs.collection('users').valueChanges() as Observable<UserFireData[]>;
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

  getBalance(value: {key: string, secret: string}): Observable<any> {
    return this.http.post(`${environment.server}/getBalance`, {
      key: value.key,
      secret: value.secret,
    })
  }
}
