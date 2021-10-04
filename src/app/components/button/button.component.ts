import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() isFullWidth: boolean = false;
  @Output() onclick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.onclick.emit();
  }

}
