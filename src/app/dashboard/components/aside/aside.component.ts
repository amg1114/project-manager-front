import { Component, Input } from '@angular/core';
import { UserI } from '../../interfaces/user.interface';
import { WorkflowI } from '../../interfaces/workflow.interface';

@Component({
    selector: 'dashboard-aside',
    templateUrl: './aside.component.html',
})
export class AsideComponent {
    @Input()
    public user?: UserI;

    @Input()
    public workflows: WorkflowI[] = [];

    get userThumb(): string {
        return this.user!.firstName[0] + this.user!.lastName[0];
    }
}
