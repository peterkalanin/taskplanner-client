import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './navigation/footer/footer.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';

@NgModule({
  declarations: [
    FooterComponent,
    PanelComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    PanelComponent,
    TaskListComponent
  ]
})
export class ComponentsModule { }
