import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TasksService } from '../tasks.service';

@Component({
  // imports: [FormsModule],
  standalone: false,
  selector: 'app-new-task-dialog',
  styleUrl: './new-task-dialog.component.scss',
  templateUrl: './new-task-dialog.component.html',
})
export class NewTaskDialogComponent {
  @Output() isModalClosed = new EventEmitter()

  @Input({required: true}) userId!:string;

  title = ''
  summary = ''
  duedate = ''

  private taskService = inject(TasksService);

  onClose() {
    this.isModalClosed.emit(false)
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.duedate,
    }, this.userId)
    this.isModalClosed.emit(false)
  }
}
