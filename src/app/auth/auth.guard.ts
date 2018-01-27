import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean>  {
    // TODO: По прямой внутренней ссылке редиректит только на пустую страницу но не на логин
    return this.auth.logined()
  }
}
