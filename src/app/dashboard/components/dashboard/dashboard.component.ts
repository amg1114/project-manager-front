import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserI } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { WorkflowI } from '../../interfaces/workflow.interface';
import { WorkflowsService } from '../../services/workflows.service';
import { of, switchMap } from 'rxjs';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private workflowsService: WorkflowsService,
        private usersService: UsersService
    ) {}

    public user?: UserI;
    public workflow?: WorkflowI;

    async ngOnInit() {
        const loggedUser = this.authService.getLoggedUser();

        if (!loggedUser) {
            this.router.navigate(['/login']);
        }

        if (
            this.router.url !== '/dashboard' &&
            this.router.url !== '/dashboard/workflows'
        ) {
            this.getCurrentWorkflow();
        }

        this.getUser();
    }

    getUser() {
        const loggedUser = this.authService.getLoggedUser();

        this.usersService.getUser(loggedUser!.sub).subscribe((user) => {
            this.user = user;
            if (this.router.url === '/dashboard') {
                if (this.user.workflowsToManagers.length) {
                    const workflow =
                        this.user.workflowsToManagers[0].workflow.slug;
                    this.router.navigate(['/dashboard/' + workflow]);
                }
            }
        });
    }

    getCurrentWorkflow() {
        const loggedUser = this.authService.getLoggedUser();
        this.activatedRoute.params
            .pipe(
                switchMap(({ slug }) => {
                    if (slug) {
                        return this.workflowsService.getWorkflowBySlug(
                            slug,
                            loggedUser!.sub
                        );
                    }
                    return of(null);
                })
            )
            .subscribe((workflow) => {
                if (!workflow) return this.router.navigateByUrl('');
                return (this.workflow = workflow);
            });
    }
}
