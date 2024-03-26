import { Component, OnInit } from '@angular/core';
import { WorkflowI } from '../../interfaces/workflow.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { UsersService } from '../../services/users.service';
import { WorkflowsService } from '../../services/workflows.service';
import { ProjectsService } from '../../services/projects.service';
import { ProjectI } from '../../interfaces/project.interface';

@Component({
    selector: 'dashboard-workflow-detail',
    templateUrl: './workflow-detail.component.html',
})
export class WorkflowDetailComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private workflowsService: WorkflowsService,
        private projectsService: ProjectsService
    ) {}

    public workflow?: WorkflowI;
    public workflowProjects: ProjectI[] = [];
    public loading: boolean = true;

    ngOnInit(): void {
        this.getCurrentWorkflow();
    }

    getCurrentWorkflow() {
        const loggedUser = this.authService.getLoggedUser();
        this.activatedRoute.params
            .pipe(
                switchMap(({ slug }) =>
                    this.workflowsService
                        .getWorkflowBySlug(slug, loggedUser!.sub)
                        .pipe(
                            catchError((err) => {
                                this.router.navigate(['/dashboard/workflows']);
                                return of(null);
                            })
                        )
                ),
                switchMap((workflow: WorkflowI | null) => {
                    if (workflow) {
                        this.loading = false;
                        this.workflow = workflow;
                        return this.projectsService.getWorkflowProjects(
                            workflow.id
                        );
                    }
                    this.loading = false;
                    return of([]);
                }),
                catchError((err) => {      
                    return of([]);
                })
            )
            .subscribe((projects) => {
                this.workflowProjects = projects;
            });
    }
}
