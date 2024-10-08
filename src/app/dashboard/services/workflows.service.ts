import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { WorkflowI } from '../interfaces/workflow.interface';
import { WorkflowStatusI } from '../interfaces/workflow-status.interface';

@Injectable({
    providedIn: 'root',
})
export class WorkflowsService {
    constructor(
        private httpClient: HttpClient,
        private readonly authService: AuthService
    ) {}

    public api_endpoint: string = 'http://localhost:8000/workflows';

    public getWorkflowsByManager(manager_id: number) {
        return this.httpClient.get<WorkflowI[]>(
            this.api_endpoint + '/' + manager_id
        );
    }

    public getWorkflowBySlug(workflow_slug: string, manager_id: number) {
        return this.httpClient.get<WorkflowI>(
            `${this.api_endpoint}/${manager_id}/${workflow_slug}`
        );
    }

    public getWorkflowStatuses(workflow: number) {
        return this.httpClient.get<WorkflowStatusI[]>(
            `${this.api_endpoint}/statuses/${workflow}`
        );
    }
}
