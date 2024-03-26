import { Component, Input } from '@angular/core';
import { ProjectI } from '../../../interfaces/project.interface';

@Component({
    selector: 'dashboard-project-card',
    templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
    @Input()
    public project!: ProjectI;

    get projectThumb(): string {
        let thumb = '';
        if (this.project) {
            const words = this.project.title.split(' ');
            words.forEach((word) => (thumb += word[0]));
        } else {
            thumb = 'P';
        }

        return thumb;
    }
}
