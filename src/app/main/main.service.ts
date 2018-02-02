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
  public ticketsStream$ = new Subject<any>();

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    Observable.timer(1, 1000).subscribe(() =>
      this.getPair('BTC_STR').subscribe(val => this.currencies$.next(val))
    );

    this.connectToTicketsStream();

    this.ticketsStream$.subscribe(
      val => console.log('ws data', val)
    );
  }

  /**
   * @deprecated
   */
  getByTicked(ticked): Observable<PriceResponse> {
    return this.currencies$.map(val => val[ticked]);
  }

  getPair(pair: string): Observable<PriceResponse> {
    return this.http.post(`${environment.server}/returnTickets`, {pair}) as Observable<PriceResponse>;
  }

  connectToTicketsStream(): void {
    console.log('try to connectToTicketsStream', environment.server);

    const ws = new WebSocket(`ws:/tickets`);
    ws.onmessage = (ev) => this.ticketsStream$.next(JSON.parse(ev.data));
  }
}
