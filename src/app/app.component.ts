import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'first-angular-app';
  selectedUserId?: string;
  openTask?: boolean;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onAddTask(addTask: boolean){
    this.openTask = addTask;
  }
}
