import { Injectable } from '@angular/core';
import { AuthMockService } from '../mock/auth-mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authMockService: AuthMockService) { }

  login() {
    var t = new Date().getTime();
    this.authMockService.login().subscribe((response) => {
      console.log(response);
      console.log(`Request took ${new Date().getTime() - t} ms`)
    })
  }
}
