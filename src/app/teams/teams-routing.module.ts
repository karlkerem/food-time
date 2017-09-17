import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from "app/teams/teams-list/teams-list.component";
import { AuthGuard } from "app/common/auth-guard.service";

const routes: Routes = [
    { path: 'teams', component: TeamsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
