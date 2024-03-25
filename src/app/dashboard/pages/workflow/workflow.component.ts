import { Component, OnInit } from '@angular/core';
import { WorkflowI } from '../../interfaces/workflow.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { UsersService } from '../../services/users.service';
import { WorkflowsService } from '../../services/workflows.service';

@Component({
    selector: 'dashboard-workflow',
    templateUrl: './workflow.component.html',
})
export class WorkflowComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private workflowsService: WorkflowsService,
        private usersService: UsersService
    ) {}

    public workflow?: WorkflowI;

    ngOnInit(): void {
      this.getCurrentWorkflow()
    }

    getCurrentWorkflow() {
        const loggedUser = this.authService.getLoggedUser();
        this.activatedRoute.params
            .pipe(
                switchMap(({ slug }) =>
                    this.workflowsService.getWorkflowBySlug(
                        slug,
                        loggedUser!.sub
                    )
                )
            )
            .subscribe((workflow) => {
                if (!workflow) return this.router.navigateByUrl('');
                return (this.workflow = workflow);
            });
    }
}
