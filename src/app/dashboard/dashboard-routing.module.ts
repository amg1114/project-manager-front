import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { WorkflowListComponent } from './pages/workflow-list/workflow-list.component';
import { WorkflowDetailComponent } from './pages/workflow-detail/workflow-detail.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'workflows',
                component: WorkflowListComponent
            }
        ]
    },
    {
        path: ':slug',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: WorkflowDetailComponent,
            },
            {
                path: 'tasks',
                component: TasksComponent,
            },
            {
                path: 'projects',
                component: ProjectsComponent,
            },
            {
                path: 'teams',
                component: TeamsComponent,
            }
        ],
    },
    
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
