import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AsideComponent } from './components/aside/aside.component';
import { WorkflowDetailComponent } from './pages/workflow-detail/workflow-detail.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { WorkflowListComponent } from './pages/workflow-list/workflow-list.component';

import { TaskCardComponent } from './components/cards/task-card/task-card.component';
import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { WorkflowCardComponent } from './components/cards/workflow-card/workflow-card.component';



@NgModule({
    declarations: [
        DashboardComponent,
        AsideComponent,
        TaskCardComponent,
        ProjectCardComponent,
        WorkflowDetailComponent,
        TaskListComponent,
        ProjectListComponent,
        TeamListComponent,
        WorkflowListComponent,
        WorkflowCardComponent,
    ],
    imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
})
export class DashboardModule {}
