import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
