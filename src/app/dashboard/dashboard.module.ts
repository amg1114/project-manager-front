import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AsideComponent } from './components/aside/aside.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        DashboardComponent,
        AsideComponent,
        TaskCardComponent,
        ProjectCardComponent,
        WorkflowComponent,
    ],
    imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
})
export class DashboardModule {}
