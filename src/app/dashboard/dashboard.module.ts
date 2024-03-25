import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AsideComponent } from './components/aside/aside.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { WorkflowsComponent } from './pages/workflows/workflows.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AsideComponent,
        TaskCardComponent,
        ProjectCardComponent,
        WorkflowComponent,
        TasksComponent,
        ProjectsComponent,
        TeamsComponent,
        WorkflowsComponent,
    ],
    imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
})
export class DashboardModule {}
