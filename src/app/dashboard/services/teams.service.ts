import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { TeamI } from '../interfaces/team.interface';

@Injectable({
    providedIn: 'root',
})
export class TeamsService {
    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {}

    private api_endpoint: string = 'http://localhost:8000/teams';

    getUserTeams(user: number) {
        return this.httpClient.get<TeamI[]>(this.api_endpoint + '/' + user);
    }
}
