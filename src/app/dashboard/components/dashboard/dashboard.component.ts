import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserI } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { WorkflowsService } from '../../services/workflows.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
        private workflowsService: WorkflowsService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {}

    public user?: UserI;
    public workflows: any[] = [];

    async ngOnInit() {
        const loggedUser = this.authService.getLoggedUser();
        if (!loggedUser) {
            this.router.navigate(['/login']);
        }

        this.getUser();
        this.getUserWorkflows();
    }

    getUser() {
        const loggedUser = this.authService.getLoggedUser();
        this.usersService
            .getUser(loggedUser!.sub)
            .subscribe((user) => (this.user = user));
    }

    getUserWorkflows() {
        const loggedUser = this.authService.getLoggedUser();

        this.workflowsService
            .getWorkflows(loggedUser!.sub)
            .subscribe((workflows) => {
                this.workflows = workflows;
            });
    }
}
