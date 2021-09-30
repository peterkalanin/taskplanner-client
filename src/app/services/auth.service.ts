import { Injectable } from '@angular/core';
import { AuthMockService } from '../mock/auth-mock.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: User | undefined;

  constructor(private authMockService: AuthMockService) {}

  login(email: string, password: string) {
    const obs$ = this.authMockService.login(email, password);

    obs$.subscribe((val) => {
      this.userToken = val;
    });

    return obs$;
  }

  register(email: string, password: string) {
    const obs$ = this.authMockService.register(email, password);

    // obs$.subscribe(val => { });

    return obs$;
  }
}
