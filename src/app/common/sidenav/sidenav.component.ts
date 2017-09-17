import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'f-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

    afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  ngOnInit() {}

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
