import { NgModule } from '@angular/core';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';


const routes: Routes = [
    {
        path: ':slug',
        component: WorkflowComponent,
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
