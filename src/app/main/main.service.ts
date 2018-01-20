import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class PriceResponse {
  USD: string;
}

@Injectable()
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  getPrice(ticked: string): Observable<PriceResponse> {
    return this.http.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${ticked.toUpperCase()}&tsyms=USD`
    ) as Observable<PriceResponse>;
  }
}
