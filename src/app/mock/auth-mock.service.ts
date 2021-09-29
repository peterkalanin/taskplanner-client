import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {

  constructor() { }

  login() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          "Issued At": "2021-09-29T05:09:33.392Z",
          "Expiration": "2021-09-29T05:09:33.392Z",
          "Username": "JavaInUse",
          "Role": "Admin"
        });
      }, environment.mock.timeout);
    })
  }
}
