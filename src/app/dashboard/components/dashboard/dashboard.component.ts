import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    constructor(private router: Router, private authService: AuthService) {}

    async ngOnInit() {
        const loggedUser = this.authService.getLoggedUser();

        if (!loggedUser) {
            this.router.navigate(['/login']);
        }
    }
}
