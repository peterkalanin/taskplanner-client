import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskCreate } from '../models/task.model';
import { simulateTimeResponse, UuidTypeEnum, uuidv4 } from './utils';

export const TASKS_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskMockService {
  userTasks: UserTasks = {};

  constructor() {}

  getTasks(userUUID: string | undefined): Observable<Task[]> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        const uModel = this.getUserTasks(userUUID);

        return o.next(uModel.tasks);
      });
    });
  }

  addTask(userUUID: string | undefined, task: TaskCreate): Observable<Task> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        if (task === undefined) {
          return o.error('No task provided');
        }

        const uModel = this.getUserTasks(userUUID);
        const newTask = {
          ...task,
          id: uuidv4(UuidTypeEnum.TASK),
        };
        uModel.addTask(newTask);

        return o.next(newTask);
      });
    });
  }

  /**
   * Returs user tasks. If not in model, create one
   * @param userUUID
   * @returns
   */
  private getUserTasks(userUUID: string): UserTask {
    if (!this.userTasks[userUUID]) {
      this.userTasks[userUUID] = new UserTask(userUUID);
    }
    return this.userTasks[userUUID];
  }
}

export interface UserTasks {
  [key: string]: UserTask;
}

/**
 * User tasks model
 */
export class UserTask {
  user: string;

  public get tasks(): Task[] {
    const t = localStorage.getItem(TASKS_KEY) || '[]';
    return JSON.parse(t) || [];
  }
  public set tasks(value: Task[]) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(value));
  }

  constructor(user: string) {
    this.user = user;
  }

  addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }
}
