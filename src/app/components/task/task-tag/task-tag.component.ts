import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTagComponent implements OnInit {
  @Input() tag: string = '';
  @Input() editable: boolean = false;

  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit();
  }
}
