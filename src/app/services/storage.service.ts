import { Injectable } from '@angular/core';

export const LocalStorage = {
  PROFIT: 'profit',
  POSITION: 'position',
  HISTORY: 'history'
};

@Injectable()
export class StorageService {

  constructor() { }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key: string, data: Object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  remove(item: string) {
    localStorage.removeItem(item);
  }
}
