import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './navigation/footer/footer.component';
import { PanelComponent } from './navigation/panel/panel.component';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { WaveThemeComponent } from './theme/background/wave.theme';
import { LineThemeComponent } from './theme/background/line.theme';
import { BubbleThemeComponent } from './theme/background/bubble.theme';
import { ModalComponent } from './modal/modal.component';
import { PawsThemeComponent } from './theme/background/paws.theme';
import { ButtonComponent } from './button/button.component';
import { TaskTagComponent } from './task/task-tag/task-tag.component';
import { ChecklistComponent } from './task/checklist/checklist.component';

const THEMES = [
  WaveThemeComponent,
  LineThemeComponent,
  BubbleThemeComponent,
  PawsThemeComponent
]

@NgModule({
  declarations: [
    ...THEMES,

    FooterComponent,
    PanelComponent,
    TaskListComponent,
    ModalComponent,
    ButtonComponent,
    TaskTagComponent,
    ChecklistComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...THEMES,

    FooterComponent,
    PanelComponent,
    TaskListComponent,
    ModalComponent,
    ButtonComponent,
    TaskTagComponent,
    ChecklistComponent
  ]
})
export class ComponentsModule { }
