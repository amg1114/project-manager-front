import { Component, OnInit } from '@angular/core';
import { WorkflowsService } from '../../services/workflows.service';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { ProjectI } from '../../interfaces/project.interface';

@Component({
    selector: 'dashboard-project-list',
    templateUrl: './projects.component.html',
})
export class ProjectListComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private workflowsService: WorkflowsService,
        private projectsService: ProjectsService
    ) {}

    public projects: ProjectI[] = [];

    ngOnInit(): void {
        const loggedUser = this.authService.getLoggedUser();
        
        this.route.parent?.params
            .pipe(
                switchMap(({ slug }) => {
                    return this.workflowsService.getWorkflowBySlug(
                        slug,
                        loggedUser!.sub
                    );
                }),
                switchMap((workflow) => {
                    return this.projectsService.getWorkflowProjects(
                        workflow.id
                    );
                })
            )
            .subscribe((projects) => (this.projects = projects));
    }
}
