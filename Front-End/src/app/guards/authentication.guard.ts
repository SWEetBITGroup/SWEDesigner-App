import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { AccountService } from '../services/account.service';

@Injectable()

/**
* In traditional server side applications the application would check permissions on the server and return an empty page 
* if the user didn’t have permissions, or perhaps redirect them to a login/register page if they were not signed up.
*/
export class AuthenticationGuard implements CanActivate {
  /**
  * Create an instantiation of AuthenticationGuard
  * @param AccountService used to create a new instantiation of AccountService
  */
  constructor( private account: AccountService ) {}
  /**
  * Checks to see if a user can visit a route, Guards are implemented as services that need to be provided
  * so we typically create them as @Injectable classes.
  * @param next it's a method of interface
  * @param state it's the bololen of the interface
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.account.getUserLoggedIn();
    }
  }
  