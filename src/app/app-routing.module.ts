import { AuthGuardHome } from './common/auth-guard-home.service';
import { AuthGuard } from 'app/common/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { MainComponent } from "app/main/main.component";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, children: [] },
  { path: 'home', component: HomeComponent, children: [], canActivate: [AuthGuard] },
  { path: '', component: MainComponent, children: [], canActivate: [AuthGuardHome] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
