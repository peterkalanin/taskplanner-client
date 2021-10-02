import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './navigation/footer/footer.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { WaveThemeComponent } from './theme/background/wave.theme';
import { LineThemeComponent } from './theme/background/line.theme';
import { BubbleThemeComponent } from './theme/background/bubble.theme';
import { ModalComponent } from './modal/modal.component';

const THEMES = [
  WaveThemeComponent,
  LineThemeComponent,
  BubbleThemeComponent
]

@NgModule({
  declarations: [
    ...THEMES,

    FooterComponent,
    PanelComponent,
    TaskListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ...THEMES,

    FooterComponent,
    PanelComponent,
    TaskListComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
