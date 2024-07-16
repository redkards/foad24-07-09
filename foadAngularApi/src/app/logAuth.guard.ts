import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({ providedIn: 'root' })
export class logAuth implements CanActivate {
  constructor(private router: Router, private tokenservice: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let test = this.tokenservice.isLogged();
    console.log(test);

    if (test) {
      return true;
    }

    return this.router.navigate(['login']);
  }
}
