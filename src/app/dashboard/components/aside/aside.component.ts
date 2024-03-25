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
        const words = this.workflow!.title.split(' ');
        let thumb = '';
        words.forEach((word) => (thumb += word[0]));

        return thumb;
    }

    get userThumb(): string {
        return this.user!.firstName[0] + this.user!.lastName[0];
    }
}
