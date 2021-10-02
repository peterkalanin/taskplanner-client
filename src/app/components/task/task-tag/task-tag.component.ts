import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
  }

}
