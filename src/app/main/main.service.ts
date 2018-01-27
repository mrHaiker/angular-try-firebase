import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

export class PriceResponse {
  baseVolume: string;
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
  public apiKey: 'SPVMCMZF-PWS9KCJG-TJ3MS4ZQ-6BFWK7F2';
  public secret: 'daf74af36e13b430782a687d762eb81cc87ad34be9eb5eca234d8e0f9231da3180496f1e89ddb6029dd72f18a05988af3e70daa437d577481c25aba63a6c337f';

  public currencies$ = new Subject<any>();

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    Observable.timer(1, 1000).subscribe(() =>
      this.http.get(`//poloniex.com/public?command=returnTicker`).subscribe(
        val => this.currencies$.next(val)
      )
    );
  }

  getByTicked(ticked): Observable<PriceResponse> {
    return this.currencies$.map(val => val[ticked])
  }

  private getRequestOptionArgs(options?) {
    if (options == null) options = new RequestOptions();
    if (options.headers == null) options.headers = new Headers();
    options.headers.append('Key', 'awdawdawd');
    options.headers.append('Access-Control-Allow-Origin', '*');

    return options;
  }
}
