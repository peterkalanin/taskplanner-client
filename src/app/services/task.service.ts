import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { TaskMockService } from '../mock/task-mock.service';
import { Task, TaskCreate } from '../models/task.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [];
  public get tasks(): Task[] {
    return this._tasks;
  }
  public set tasks(value: Task[]) {
    this._tasks = value;
    this.tasks$.next(this.tasks);
  }
  tasks$: Subject<Task[]> = new Subject<Task[]>();

  constructor(
    private taskMockService: TaskMockService,
    private authService: AuthService
  ) {}

  getAllTasks(): Observable<Task[]> {
    const obs$ = this.taskMockService
      .getTasks(this.authService.userId)
      .pipe(share());

    obs$.subscribe((val) => {
      this.tasks = val;
    });

    return obs$;
  }

  createTask(task: TaskCreate): Observable<Task> {
    const obs$ = this.taskMockService
      .addTask(this.authService.userId, task)
      .pipe(share());

    obs$.subscribe((val) => {
      this.tasks = [val];
    });

    return obs$;
  }
}