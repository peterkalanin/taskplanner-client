import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }
