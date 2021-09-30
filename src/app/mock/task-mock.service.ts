import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

export const TASKS_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskMockService {
  userTasks: UserTasks = {};

  constructor() {}

  getTask(userUUID: string): Task[] {
    const uModel = this.getUserTasks(userUUID);

    return uModel.tasks;
  }

  addTask(userUUID: string, task: Task): void {
    const uModel = this.getUserTasks(userUUID);
    uModel.addTask(task);
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
