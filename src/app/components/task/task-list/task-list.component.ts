import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UuidTypeEnum, uuidv4 } from 'src/app/mock/utils';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];

  unsubscribe$: Subject<any> = new Subject<any>();

  constructor(public theme: ThemeService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.tasks$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.tasks = [...val, {
          id: 'asda',
          date: new Date(),
          description: '',
          name: 'Uprac byt',
          tags: ['upratovanie']
        }];
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
