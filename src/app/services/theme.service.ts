import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  colors: string[] = ['orange', 'rose', 'pink', 'violet', 'blue', 'teal', 'green', 'lime',];
  primary: string = 'blue';

  motives: string[] = ['wave', 'line', 'bubble', 'paws']
  motive: string = 'line';

  backgrounds: string[] = ['sea', 'forest', 'westie']
  background: string = 'sea';

  constructor() { }

  changePrimary(newTheme: string) {
    if (!this.colors.includes(newTheme)) {
      return;
    }

    this.primary = newTheme;
  }

  changeMotive(newMotive: string) {
    if (!this.motives.includes(newMotive)) {
      return;
    }

    this.motive = newMotive;
  }

  changeBackground(newBackground: string) {
    if (!this.backgrounds.includes(newBackground)) {
      return;
    }

    this.background = newBackground;
  }
}
