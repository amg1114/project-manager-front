import { Component, Input } from '@angular/core';
import { TaskI } from '../../../interfaces/task.interface';

@Component({
  selector: 'dashboard-task-card',
  templateUrl: './task-card.component.html'
})
export class TaskCardComponent {
  @Input()
  public task!: TaskI;
}
