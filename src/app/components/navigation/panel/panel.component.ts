import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {
  appName: string = 'Task Planner App';
  @ViewChild('panelContent') panelContent: any;

  constructor() {}

  ngOnInit(): void {}

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
}
