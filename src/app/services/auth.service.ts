import { Injectable } from '@angular/core';
import { AuthMockService } from '../mock/auth-mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwt: any;

  constructor(private authMockService: AuthMockService) { }

  login(email: string, password: string) {
    const obs$ = this.authMockService.login(email, password);

    obs$.subscribe(val => {
      this.jwt = val;
    });

    return obs$;
  }

  register(email: string, password: string) {
    const obs$ = this.authMockService.register(email, password);

    // obs$.subscribe(val => { });

    return obs$;
  }
}
