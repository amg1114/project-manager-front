import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AsideComponent } from './components/aside/aside.component';
import { WorkflowDetailComponent } from './pages/workflow-detail/workflow-detail.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { WorkflowsComponent } from './pages/workflows/workflows.component';

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
        TasksComponent,
        ProjectsComponent,
        TeamsComponent,
        WorkflowsComponent,
        WorkflowCardComponent,
    ],
    imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
})
export class DashboardModule {}
