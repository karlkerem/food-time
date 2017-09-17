import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {

  private firebaseAuthUI;

  constructor(private router: Router) { }


  getFirebaseAuthConf() {
    const self = this;
    return {
        callbacks: {
          signInSuccess: function(currentUser, credential, redirectUrl) {
            self.router.navigate(['/home']);
            return false;
          }
        },
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'http://example.com'
      };
  }

  getFirebaseAuthUI() {
    if (this.firebaseAuthUI) {
      this.firebaseAuthUI.reset();
      return this.firebaseAuthUI;
    }
    this.firebaseAuthUI = new firebaseui.auth.AuthUI(firebase.auth());
    return this.firebaseAuthUI;
  }

}
