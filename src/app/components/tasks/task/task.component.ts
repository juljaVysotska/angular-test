import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from '../../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  imports: [CardComponent, DatePipe],
  selector: 'app-task',
  styleUrl: './task.component.scss',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() completeTaskId = new EventEmitter<string>()

  private tasksService = inject(TasksService) 

  onTaskComplete() {
    this.tasksService.removeTask(this.task?.id!)
  }
}
