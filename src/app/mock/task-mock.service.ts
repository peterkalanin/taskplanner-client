import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskCreate } from '../models/task.model';
import { UserLogin } from '../models/user.model';
import { simulateTimeResponse, UuidTypeEnum, uuidv4 } from './utils';

export const TASKS_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskMockService {
  public get tasks(): Task[] {
    const u = localStorage.getItem(TASKS_KEY) || '[]';
    return JSON.parse(u) || [];
  }
  public set tasks(value: Task[]) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(value));
  }

  constructor() { }

  getTasks(userUUID: string | undefined): Observable<Task[]> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        const userTasks = this.tasks.filter((t) => t.userId == userUUID);

        return o.next(userTasks);
      });
    });
  }

  addTask(userUUID: string | undefined, task: TaskCreate): Observable<Task> {
    console.log(userUUID)
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        if (task === undefined) {
          return o.error('No task provided');
        }

        const newTask = {
          ...task,
          id: uuidv4(UuidTypeEnum.TASK),
          userId: userUUID
        } as Task;
        this.tasks = [newTask as Task].concat(this.tasks);

        return o.next(newTask);
      });
    });
  }
}
