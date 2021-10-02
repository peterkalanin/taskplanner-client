import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccComponent } from './acc/acc.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccComponent,
    DashboardComponent,
    SettingsComponent,
    TasksComponent,
    TaskManagerComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class AccountModule { }
