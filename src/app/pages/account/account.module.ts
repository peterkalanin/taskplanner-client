import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccComponent } from './acc/acc.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AccComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ComponentsModule
  ]
})
export class AccountModule { }
