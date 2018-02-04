import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {
  public loader$ = new Subject<boolean>();
  constructor() { }

  show() {
    this.loader$.next(true)
  }

  hide() {
    this.loader$.next(false)
  }
}
