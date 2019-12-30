import {
  ActivatedRoute,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FakeAuth } from "./authFake.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authFake: FakeAuth, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFake.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      }
      this.router.navigate(["/"]);
      return false;
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
