import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserI } from '../../interface/logged-user.interface';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestI } from '../../interface/register-request.interface';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    constructor(
        private readonly authService: AuthService,
        private router: Router
    ) {}

    public firstName: string = '';
    public lastName: string = '';
    public email: string = '';
    public password: string = '';

    ngOnInit(): void {
        const loggedUser: LoggedUserI | null = this.authService.getLoggedUser();
        if (loggedUser) {
            this.router.navigate(['/dashboard']);
        }
    }

    public register() {
        const registerFields: RegisterRequestI = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
        };

        this.authService
            .register(registerFields)
            .subscribe(({ access_token }) => {
                this.authService.setToken(access_token);
                this.router.navigate(['/dashboard']);
            });
    }
}
