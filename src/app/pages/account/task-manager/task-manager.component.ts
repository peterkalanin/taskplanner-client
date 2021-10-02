import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskCreate } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  task?: Task | TaskCreate;
  loading: boolean = true;
  isCreate: boolean = false;

  constructor(
    public theme: ThemeService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const taskId = params.taskId;
        console.log(taskId)
        if (taskId) {
          this.getTask(taskId);
        } else {
          this.isCreate = true;
          this.createTask();
        }
      });
  }

  onClose() {
    if (this.isCreate) {
      if (this.task?.name) {
        this.taskService.createTask(this.task as TaskCreate).subscribe((response) => {
          // TODO: Remove this pls
          this.router.navigate(['..'], { relativeTo: this.route });
        })
      } else {
        this.router.navigate(['..'], { relativeTo: this.route });
      }
    } else {
      this.taskService.updateTask(this.task as Task).subscribe((response) => {
        this.router.navigate(['..'], { relativeTo: this.route });
      })
    }
  }

  getTask(taskId: string) {
    this.taskService.getAllTasks();
    this.taskService.tasks$.subscribe(t => {
      const task = t.find(t => t.id == taskId);
      this.task = task;
    });
  }

  createTask() {
    this.task = {
      name: ''
    } as TaskCreate;
  }
}
