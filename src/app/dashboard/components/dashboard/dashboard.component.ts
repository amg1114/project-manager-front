import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserI } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { WorkflowsService } from '../../services/workflows.service';
import { WorkflowI } from '../../interfaces/workflow.interface';

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
    public workflows: WorkflowI[] = [];

    async ngOnInit() {
        const loggedUser = this.authService.getLoggedUser();
        if (!loggedUser) {
            this.router.navigate(['/login']);
        }

        this.getUser();
        
    }

    getUser() {
        const loggedUser = this.authService.getLoggedUser();
        this.usersService.getUser(loggedUser!.sub).subscribe((user) => {
            this.user = user;
            this.workflows = user.workflowsToManagers.map(
                (rel) => rel.workflow
            );

            if(this.workflows.length > 0 && this.router.url === "/dashboard"){
              this.router.navigate(['/dashboard/'+this.workflows[0].slug])  
            }
        });
    }
}
