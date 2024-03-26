import { Component, Input } from '@angular/core';
import { TeamI } from '../../../interfaces/team.interface';

@Component({
    selector: 'dashboard-team-card',
    templateUrl: './team-card.component.html',
})
export class TeamCardComponent {
    @Input()
    team!: TeamI;

    get teamThumb(): string {
      let thumb = '';
      if (this.team) {
          const words = this.team.name.split(' ');
          words.forEach((word) => (thumb += word[0]));
      } else {
          thumb = 'P';
      }

      return thumb;
  }
}
