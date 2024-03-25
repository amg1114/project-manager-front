import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserI } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
        private router: Router
    ) {}

    public user?: UserI;

    ngOnInit(): void {
        const loggedUser = this.authService.getLoggedUser();
        if (!loggedUser) {
            this.router.navigate(['/login']);
        }
        this.getUser()
    }

    getUser() {
        const loggedUser = this.authService.getLoggedUser();
        this.usersService
            .getUser(loggedUser!.sub)
            .subscribe((user) => this.user = user);
    }
}
