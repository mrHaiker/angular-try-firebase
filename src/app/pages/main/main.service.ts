import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

export class UserFireData {
  key: string;
  secret: string;
}


@Injectable()
export class MainService {
  constructor(
    private afs: AngularFirestore
  ) {}

  getUserData(): Observable<UserFireData[]> {
    return this.afs.collection('users').valueChanges() as Observable<UserFireData[]>;
  }
}
