import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

export const USERS_KEY = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {
  public get users(): User[] {
    const u = localStorage.getItem(USERS_KEY) || '[]';
    return JSON.parse(u) || [];
  }
  public set users(value: User[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(value));
  }

  constructor() { }

  login(email: string, password: string): Observable<string> {
    return new Observable(o => {
      const user = this.users.find(u => u.email == email && u.password == password);
      if (user) {
        return o.next(user.email);

      } else {
        return o.error('no user or wrong password');
      }
    });
  }

  register(email: string, password: string): Observable<string> {
    return new Observable(o => {
      const user = this.users.find(u => u.email == email);
      if (user) {
        return o.error('user alredy registered');
      } else {
        const newUser = {
          email,
          password
        }
        this.users = [...this.users, newUser];
        return o.next(newUser.email);
      }
    });
  }
}
