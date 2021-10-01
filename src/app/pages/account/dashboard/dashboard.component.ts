import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public theme: ThemeService, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks();
  }
}
