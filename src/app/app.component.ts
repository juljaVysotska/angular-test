import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './utils/dummy-data';
import { User } from './components/user/user.model';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string;

  get selectedUser() : User {
    // this.selectedUser = this.users.find((item) => item.id === id)?.name || ''
    return this.users.find((item) => item.id === this.selectedId)!
  }


  onUserSelect(id: string) {
    console.log('id', id)

    this.selectedId = id
  }
}
