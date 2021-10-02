import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public theme: ThemeService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks();
  }

}
