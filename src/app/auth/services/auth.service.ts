import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    LoginRequestI,
    LoginResponseI,
} from '../interface/login-request.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoggedUserI } from '../interface/logged-user.interface';
import { RegisterRequestI } from '../interface/register-request.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly jwtService: JwtHelperService
    ) {}

    public api_endpoint: string = 'http://localhost:8000/auth';

    public login(loginFields: LoginRequestI) {
        return this.httpClient.post<LoginResponseI>(
            this.api_endpoint + '/login',
            loginFields
        );
    }

    public register(registerFields: RegisterRequestI) {
        return this.httpClient.post<LoginResponseI>(
            this.api_endpoint + '/register',
            registerFields
        );
    }

    public setToken(access_token: string) {
        localStorage.setItem('access_token', access_token);
    }

    public getToken() {
        return localStorage.getItem('access_token');
    }

    public getLoggedUser() {
        const token = this.getToken();
        if (token && !this.jwtService.isTokenExpired(token)) {
            return this.jwtService.decodeToken<LoggedUserI>(token);
        }
        return null;
    }
}
