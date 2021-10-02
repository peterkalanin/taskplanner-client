import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { AuthMockService } from '../mock/auth-mock.service';
import { User } from '../models/user.model';

export const USER_STORED_KEY = 'user_stored';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: User | undefined;

  get userId() {
    return this.userToken?.id || undefined;
  }

  public get storedUser(): User | undefined {
    const u = localStorage.getItem(USER_STORED_KEY);
    return u ? JSON.parse(u) : undefined;
  }
  public set storedUser(value: User | undefined) {
    localStorage.setItem(USER_STORED_KEY, JSON.stringify(value));
  }

  constructor(private authMockService: AuthMockService) {
    if (!this.userToken) {
      this.userToken = this.storedUser;
    }
  }

  login(email: string, password: string) {
    const obs$ = this.authMockService.login(email, password).pipe(share());

    obs$.subscribe((val) => {
      this.userToken = val;
      this.storedUser = this.userToken;
    });

    return obs$;
  }

  register(email: string, password: string) {
    const obs$ = this.authMockService.register(email, password).pipe(share());

    // obs$.subscribe(val => { });

    return obs$;
  }
}
