import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  colors: string[] = ['orange', 'rose', 'pink', 'violet', 'blue', 'teal', 'green', 'lime',];
  primary: string = 'blue';

  constructor() { }

  changePrimary(newTheme: string) {
    if (!this.colors.includes(newTheme)) {
      return;
    }

    this.primary = newTheme;
  }
}
