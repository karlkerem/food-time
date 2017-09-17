import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivateChild(): Observable<boolean> {
    return this.checkAuth();
  }

  canActivate(): Observable<boolean> {
    return this.checkAuth();
  }

  checkAuth(): Observable<boolean> {
    return this.afAuth.authState.map(u => {
      if (u) { return true; }
    }).catch(_ => {
      this.router.navigate(['/login']);
      return Observable.of(false);
    });
  }
}
