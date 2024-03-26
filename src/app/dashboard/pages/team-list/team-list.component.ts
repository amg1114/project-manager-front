import { Component, OnInit } from '@angular/core';

import { TeamI } from '../../interfaces/team.interface';

import { AuthService } from '../../../auth/services/auth.service';
import { TeamsService } from '../../services/teams.service';

@Component({
    selector: 'app-teams',
    templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private teamsService: TeamsService
    ) {}

    public teams: TeamI[] = [];

    ngOnInit(): void {
        const loggedUser = this.authService.getLoggedUser();
        if (loggedUser) {
            this.teamsService
                .getUserTeams(loggedUser.sub)
                .subscribe((teams) => (this.teams = teams));
        }
    }
}
