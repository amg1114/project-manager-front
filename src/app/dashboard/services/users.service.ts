import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserI } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(
        private httpClient: HttpClient,
        private readonly authService: AuthService
    ) {}

    public api_endpoint: string = 'http://localhost:8000/users';

    getUser(id: number) {
        return this.httpClient.get<UserI>(this.api_endpoint + '/' + id);
    }
}
