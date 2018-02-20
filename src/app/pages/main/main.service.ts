import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { Order } from '../../services/trade.service';

export class UserFireData {
  key: string;
  secret: string;
  history?: Order[];
  constructor(data) {
    this.key = data.key;
    this.secret = data.secret;
    this.history = data.history || [];
  }
}


@Injectable()
export class MainService {
  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
  ) {}

  getUserData(): Observable<UserFireData> {
    return this.afs.collection('users').doc(this.auth.user.uid).valueChanges() as Observable<UserFireData>
  }
}
