import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PanelComponent implements OnInit {
  appName: string = 'Task Planner App';
  @ViewChild('panelContent') panelContent: any;

  constructor(private router: Router, public theme: ThemeService) {
    // this.router.events.subscribe((val) => {
    //   console.log(val);
    //   if (this.panelContent) {
    //     const elements = this.panelContent.nativeElement.querySelectorAll('.active-link');
    //     console.log(elements)
    //     elements.array.forEach(element => {
    //       element.classList.add('text-pink-500')
    //     });
    //   }
    // })
  }

  ngOnInit(): void {
    console.log(this.isRouteActive(['/acc', 'dashboard']))
  }

  openMobilePanel() {
    const classList = this.panelContent.nativeElement.classList;
    classList.remove('hidden');
    classList.add('bg-white', 'm-2', 'py-3', 'px-6');
  }

  closeMobilePanel() {
    const classList = this.panelContent.nativeElement.classList;
    classList.remove('bg-white', 'm-2', 'py-3', 'px-6');
    classList.add('hidden');
  }

  isRouteActive(route: string[]) {
    return this.router.isActive(this.router.createUrlTree(route), true);
  }

  get activeTheme() {
    // return 'text-' +
    //   theme.primary +
    //   '-500 hover:text-' +
    //   theme.primary +
    //   '-700';
    return `text-${this.theme.primary}-500 hover:text-${this.theme.primary}-600`
  }
}
