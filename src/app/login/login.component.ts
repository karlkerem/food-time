import { LoginService } from '../common/login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { Inject } from '@angular/core';


@Component({
  selector: 'f-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private afAuth: AngularFireAuth, private loginService: LoginService) {
    console.log(this.afAuth.auth.currentUser);
   }

  ngOnInit() {
      const ui = this.loginService.getFirebaseAuthUI();
      ui.start('#firebaseui-auth-container', this.loginService.getFirebaseAuthConf());
  }

}
