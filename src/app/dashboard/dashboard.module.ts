import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeamComponent } from './pages/team/team.component';



@NgModule({
  declarations: [
    WorkflowComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
