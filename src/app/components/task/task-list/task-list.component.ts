import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { UuidTypeEnum, uuidv4 } from 'src/app/mock/utils';
import { Task } from 'src/app/models/task.model';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    {
      id: uuidv4(UuidTypeEnum.TASK),
      date: new Date('1-10-2021 10:32'),
      description: 'Uprac celú kuchyňu aj chladničku',
      name: 'Upratovanie kuchyne',
      tags: ['upratovanie'],
    },
    {
      id: uuidv4(UuidTypeEnum.TASK),
      date: new Date('1-10-2021 11:20'),
      description: 'Uprac celú kuchyňu aj chladničku',
      name: 'Upratovanie obývačky',
      tags: ['upratovanie'],
    },
    {
      id: uuidv4(UuidTypeEnum.TASK),
      date: new Date('1-10-2021 14:35'),
      description: 'Uprac celú kuchyňu aj chladničku',
      name: 'Vysávanie',
      tags: ['upratovanie'],
    },
    {
      id: uuidv4(UuidTypeEnum.TASK),
      date: new Date('1-10-2021 12:00'),
      description: 'Uprac celú kuchyňu aj chladničku',
      name: 'Varenie',
      tags: ['varenie'],
    },
  ];

  constructor(public theme: ThemeService) {}

  ngOnInit(): void {
    console.log(this.tasks);
  }
}
