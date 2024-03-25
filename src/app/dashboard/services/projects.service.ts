import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { ProjectI } from '../interfaces/project.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    constructor(
        private httpClient: HttpClient,
        private readonly authService: AuthService
    ) {}

    public api_endpoint: string = 'http://localhost:8000/projects';

    public getWorkflowProjects(workflow: number) {
        return this.httpClient.get<ProjectI[]>(this.api_endpoint + '/' + workflow);
    }
}
