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
    public workflow?: WorkflowI;

    get workflowThumb(): string {
        let thumb = '';
        if (this.workflow) {
            const words = this.workflow.title.split(' ');
            words.forEach((word) => (thumb += word[0]));
        } else {
            thumb = 'W';
        }

        return thumb;
    }

    get userThumb(): string {
        return this.user!.firstName[0] + this.user!.lastName[0];
    }
}
