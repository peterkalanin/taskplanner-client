import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Checklist } from 'src/app/models/task.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistComponent implements OnInit {
  @Input('ngModel')
  checklist: Checklist | undefined;

  @Output('ngModelChange')
  checklistChange: EventEmitter<Checklist> = new EventEmitter<Checklist>();

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
    console.log(this.checklist);
  }

}
