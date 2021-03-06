import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccComponent } from './acc/acc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'acc',
    component: AccComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'tasks',
        component: TasksComponent,
        children: [
          {
            path: 'new',
            component: TaskManagerComponent
          },
          {
            path: ':taskId',
            component: TaskManagerComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
