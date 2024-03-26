import { Component, OnInit } from '@angular/core';
import { WorkflowI } from '../../interfaces/workflow.interface';
import { WorkflowsService } from '../../services/workflows.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'dashboard-workflow-list',
    templateUrl: './workflow-list.component.html',
})
export class WorkflowListComponent implements OnInit {
    constructor(
        private workflowsService: WorkflowsService,
        private authService: AuthService
    ) {}

    public workflows: WorkflowI[] = [];

    ngOnInit(): void {
        
        const loggedUser = this.authService.getLoggedUser();
        if (loggedUser) {
            this.workflowsService
            .getWorkflowsByManager(loggedUser.sub)
            .subscribe((workflows) => {
                    console.log('test', workflows);
                    this.workflows = workflows;
                });
        }
    }
}
