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

const THEMES = [
  WaveThemeComponent,
  LineThemeComponent,
  BubbleThemeComponent
]

@NgModule({
  declarations: [
    FooterComponent,
    PanelComponent,
    TaskListComponent,

    ...THEMES
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    PanelComponent,
    TaskListComponent,

    ...THEMES
  ]
})
export class ComponentsModule { }
