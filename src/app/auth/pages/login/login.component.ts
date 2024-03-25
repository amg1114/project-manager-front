import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoggedUserI } from '../../interface/logged-user.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    constructor(
        private readonly authService: AuthService,
        private router: Router
    ) {}

    public email: string = '';
    public password: string = '';

    ngOnInit(): void {
        const loggedUser: LoggedUserI | null = this.authService.getLoggedUser();
        if (loggedUser) {
            this.router.navigate(['/dashboard']);
        }
    }

    public login() {
        const userFields = {
            email: this.email,
            password: this.password,
        };

        this.authService.login(userFields).subscribe(({ access_token }) => {
            this.authService.setToken(access_token);
            this.router.navigate(['/dashboard']);
        });
    }
}
