import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { TaskMockService } from '../mock/task-mock.service';
import { Task } from '../models/task.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
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
      this.tasks$.next(val);
    });

    return obs$;
  }
}
