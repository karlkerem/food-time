import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [TeamsListComponent, ManageTeamComponent]
})
export class TeamsModule { }
