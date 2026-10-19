import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTask, Task } from './task/task.model';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { TasksService } from './tasks.service';

const dummyTasks: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
@Component({
  // imports: [TaskComponent, NewTaskDialogComponent],
  selector: 'app-tasks',
  standalone: false,
  styleUrl: './tasks.component.scss',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) public user!: User;
  isAddingTask = false;

  constructor(private taskService: TasksService){}

  get usersTasks() {
    return this.taskService.getTasksByUserId(this.user.id)
  }
  onAddTask(){
    this.isAddingTask = true;
  }

  onModalOpen() {
    this.isAddingTask = false
  }
}
