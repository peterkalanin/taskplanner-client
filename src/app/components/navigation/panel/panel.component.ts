import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {
  appName: string = 'Task Planner App'
  @ViewChild('panelContent') panelContent: any;

  constructor() { }

  ngOnInit(): void {
  }

  openMobilePanel() {
    const classList = this.panelContent.nativeElement.classList
    classList.remove('panel-closed')
    classList.add('panel-opened')
  }

  closeMobilePanel() {
    const classList = this.panelContent.nativeElement.classList
    classList.remove('panel-opened')
    classList.add('panel-closed')
  }

}
