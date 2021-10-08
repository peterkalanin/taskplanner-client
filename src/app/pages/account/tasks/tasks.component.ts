import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public theme: ThemeService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks()
      .subscribe((response) => {
        this.tasks = response;
      })
  }

}
