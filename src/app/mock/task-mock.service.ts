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

  constructor() {
    this.tasks = this.tasks.map((t) => {
      return {
        id: t.id,
        name: t.name,
        userId: t.userId,

        date: t.date || undefined,
        deleted: t.deleted || false,
        description: t.description || '',
        checklists: []
      }
    })
  }

  nondeletedTasks(userUUID: string): Task[] {
    return this.tasks.filter((t) => t.userId == userUUID && t.deleted == false);
  }

  getTasks(userUUID: string | undefined): Observable<Task[]> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        const userTasks = this.nondeletedTasks(userUUID);

        return o.next(userTasks);
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

        const newTask = {
          ...task,
          id: uuidv4(UuidTypeEnum.TASK),
          userId: userUUID,
          deleted: false
        } as Task;
        this.tasks = [newTask as Task].concat(this.tasks);

        return o.next(newTask);
      });
    });
  }

  editTask(userUUID: string | undefined, task: Task): Observable<Task[]> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        if (task === undefined) {
          return o.error('No task provided');
        }

        this.tasks = this.tasks.map((t) => {
          if (t.id == task.id) {
            return task
          } else {
            return t;
          }
        })

        return o.next(this.nondeletedTasks(userUUID));
      });
    });
  }

  deleteTask(userUUID: string | undefined, task: Task): Observable<Task[]> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        if (userUUID === undefined) {
          return o.error('No userUUID');
        }

        if (task === undefined) {
          return o.error('No task provided');
        }

        this.tasks = this.tasks.map((t) => {
          if (t.id == task.id) {
            return { ...task, deleted: true }
          } else {
            return t;
          }
        })

        return o.next(this.nondeletedTasks(userUUID));
      });
    });
  }
}
