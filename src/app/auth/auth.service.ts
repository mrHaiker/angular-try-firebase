import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { isUndefined } from 'util';
import 'rxjs/add/observable/fromPromise';



@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  constructor(
    private fireAuth: AngularFireAuth
  ) {
    this.user = this.fireAuth.authState;
  }

  login(form): Observable<any> {
    return Observable.fromPromise(
      this.fireAuth.auth.signInWithEmailAndPassword(form.email, form.pass)
    )
  }

  logined(): Observable<boolean> {
    return this.user.map(user => user && !isUndefined(user.uid))
  }

  logout(): Observable<any> {
    return Observable.fromPromise(
      this.fireAuth.auth.signOut()
    )
  }


}
