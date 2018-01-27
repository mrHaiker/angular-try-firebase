import { Injectable } from '@angular/core';

export class User {
  createdAt: string;
  disabled: boolean;
  email: string;
  emailVerified: boolean;
  lastLoginAt: string;
  localId: string;
  passwordHash: string;
  passwordUpdatedAt: number;
  providerUserInfo: any;
  validSince: string;
}

@Injectable()
export class UserService {
  private _user: User;

  constructor() { }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
