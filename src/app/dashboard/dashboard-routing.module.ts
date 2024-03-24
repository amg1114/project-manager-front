import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: ':slug',
                component: WorkflowComponent
            }
        ]
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
