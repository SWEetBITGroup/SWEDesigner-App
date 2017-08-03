import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AccountService } from '../services/account.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor( private account: AccountService ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.account.getUserLoggedIn();
  }
}
