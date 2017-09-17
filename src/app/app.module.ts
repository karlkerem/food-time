import { TeamsModule } from './teams/teams.module';
import { AuthGuardHome } from './common/auth-guard-home.service';
import { AuthGuard } from './common/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule, MdIconModule, MdButtonModule, MdCardModule } from '@angular/material';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from "app/common/login.service";
import { SidenavComponent } from './common/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CovalentStepsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TeamsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, AuthGuardHome, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
