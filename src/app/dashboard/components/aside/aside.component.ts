import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { WorkflowsService } from '../../services/workflows.service';

import { UserI } from '../../interfaces/user.interface';
import { WorkflowI } from '../../interfaces/workflow.interface';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'dashboard-aside',
    templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private usersService: UsersService,
        private workflowsService: WorkflowsService
    ) {}

    public user?: UserI;

    public workflow: WorkflowI | null = null;

    ngOnInit(): void {
        const loggedUser = this.authService.getLoggedUser();
        if (loggedUser) {
            this.route.params.pipe();
            this.usersService
                .getUser(loggedUser.sub)
                .pipe(
                    switchMap((user) => {
                        this.user = user;
                        return this.route.params;
                    }),
                    switchMap(({ slug }) => {
                        if (slug) {
                            return this.workflowsService.getWorkflowBySlug(
                                slug,
                                loggedUser.sub
                            );
                        }
                        return of(null);
                    })
                )
                .subscribe((workflow) => {
                    if (workflow) {
                        this.workflow = workflow;
                    }
                });
        }
    }

    get workflowThumb(): string {
        let thumb = '';
        if (this.workflow) {
            const words = this.workflow.title.split(' ');
            words.forEach((word) => (thumb += word[0]));
        } else {
            thumb = 'W';
        }

        return thumb;
    }

    get userThumb(): string {
        return this.user!.firstName[0] + this.user!.lastName[0];
    }
}
