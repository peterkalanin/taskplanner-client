import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSummaryComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onTaskSelect() {
    if (this.task) {
      this.router.navigate([this.task.id], { relativeTo: this.route });
    }
  }

}
