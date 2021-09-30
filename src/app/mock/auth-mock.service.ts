import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLogin } from '../models/user.model';
import { simulateTimeResponse, uuidv4 } from './utils';

export const USERS_KEY = 'users';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
  public get users(): UserLogin[] {
    const u = localStorage.getItem(USERS_KEY) || '[]';
    return JSON.parse(u) || [];
  }
  public set users(value: UserLogin[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(value));
  }

  constructor() {}

  login(email: string, password: string): Observable<User> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        const user = this.users.find(
          (u) => u.email == email && u.password == password
        );
        if (user) {
          return o.next(user as User);
        } else {
          return o.error('no user or wrong password');
        }
      });
    });
  }

  register(email: string, password: string): Observable<User> {
    return new Observable((o) => {
      simulateTimeResponse(() => {
        const user = this.users.find((u) => u.email == email);
        if (user) {
          return o.error('user alredy registered');
        } else {
          const newUser = {
            id: uuidv4(),
            email,
            password,
          } as UserLogin;
          this.users = [...this.users, newUser];
          return o.next(newUser as User);
        }
      });
    });
  }
}
