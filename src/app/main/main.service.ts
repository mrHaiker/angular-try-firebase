import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import * as Autobahn from 'autobahn';
import { RequestOptions } from '@angular/http';

export class PriceResponse {
  USD: string;
}

@Injectable()
export class MainService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.connectToWS();
  }

  connectToWS() {
    const wsuri = "wss://api.poloniex.com";
    const connection = new Autobahn.Connection({
      url: wsuri,
      realm: "realm1"
    });

    connection.onopen = function (session) {
      function marketEvent (args,kwargs) {
        console.log(args);
      }
      function tickerEvent (args,kwargs) {
        console.log(args);
      }
      function trollboxEvent (args,kwargs) {
        console.log(args);
      }
      session.subscribe('BTC_XMR', marketEvent);
      session.subscribe('ticker', tickerEvent);
      session.subscribe('trollbox', trollboxEvent);
    }

    connection.onclose = function () {
      console.log("Websocket connection closed");
    }

    connection.open();
  }

  getPrice(ticked: string): Observable<PriceResponse> {
    return this.http.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${ticked.toUpperCase()}&tsyms=USD`
    ) as Observable<PriceResponse>;
  }

  getAny(): Observable<any> {
    const options = this.getRequestOptionArgs();
    return this.http.get(`//poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH`, options)
  }

  private getRequestOptionArgs(options?) {
    if (options == null) options = new RequestOptions();
    if (options.headers == null) options.headers = new Headers();
    options.headers.append('Key', 'awdawdawd');
    options.headers.append('Access-Control-Allow-Origin', '*');

    console.log('optionsHeaders', options.headers)

    return options;
  }
}
