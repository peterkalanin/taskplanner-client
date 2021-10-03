import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskCreate } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, AfterViewInit {
  task?: Task | TaskCreate;
  loading: boolean = true;
  isCreate: boolean = false;

  @ViewChild('descriptionTextarea') descriptionTextareaElement: any;

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

  ngAfterViewInit() {
    // console.log(this.descriptionTextareaElement);
    // this.onTextareaChange(this.descriptionTextareaElement.nativeElement);
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
      setTimeout(() => {
        this.onTextareaChange()
      }, 10);
    });
  }

  createTask() {
    this.task = {
      name: ''
    } as TaskCreate;
  }

  removeTask() {
    if (this.isCreate) {
      return;
    }

    this.taskService.deleteTask(this.task as Task).subscribe((response) => {
      this.router.navigate(['..'], { relativeTo: this.route });
    })
  }

  onTextareaChange() {
    if (!this.descriptionTextareaElement) {
      return;
    }

    const target = this.descriptionTextareaElement.nativeElement;
    const text: string = target.value;
    const lines: number = text.split('\n').length + 1;
    target.style = `height: ${(lines * 1.5)}rem`
  }
}
