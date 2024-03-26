import { Component, Input } from '@angular/core';
import { WorkflowI } from '../../../interfaces/workflow.interface';

@Component({
    selector: 'dashboard-workflow-card',
    templateUrl: './workflow-card.component.html',
})
export class WorkflowCardComponent {
    @Input()
    public workflow!: WorkflowI;

    get workflowThumb(): string {
        let thumb = '';
        if (this.workflow) {
            const words = this.workflow.title.split(' ');
            words.forEach((word) => (thumb += word[0]));
        } else {
            thumb = 'P';
        }

        return thumb;
    }
}
