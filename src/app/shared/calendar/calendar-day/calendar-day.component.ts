import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { DayClass } from '../types/dayClass';
import { Location } from '../types/location';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  readonly Location = Location
  @Input() date: Date
  @Input() isSameMonth: boolean
  @Input() classes: DayClass[]

  constructor(private _router: Router, private _sharedService: SharedService) {}

  ngOnInit(): void {
  }

  getTimeFormat(date: Date) {
    return this._sharedService.formatTime(date)
  }
}
