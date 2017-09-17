import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardHome {

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map(u => {
      if (u) {
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }).catch(_ => {
      return Observable.of(false);
    } );
  }
}

