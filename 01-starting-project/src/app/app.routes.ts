import { Routes } from '@angular/router';
import { TaskComponent } from './tasks/task/task.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-Domain>/users/<uid>
    component: UserTasksComponent,
  },
];
