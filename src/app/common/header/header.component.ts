import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  userImg: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

    afAuth.authState.subscribe(user => {
      if (user) {
        this.setUserImg(user);
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  ngOnInit() {

  }

  setUserImg(user) {
    if (user.photoURL) {
      this.userImg = user.photoURL;
    } else {
      this.userImg = "assets/user.png";
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
