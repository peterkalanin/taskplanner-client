import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.scss']
})
export class AccComponent implements OnInit {

  constructor(public theme: ThemeService) { }

  ngOnInit(): void {
  }

}
