import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { TeamListComponent } from './pages/team-list/team-list.component';
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
                component: TaskListComponent,
            },
            {
                path: 'projects',
                component: ProjectListComponent,
            },
            {
                path: 'teams',
                component: TeamListComponent,
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'workflows',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
