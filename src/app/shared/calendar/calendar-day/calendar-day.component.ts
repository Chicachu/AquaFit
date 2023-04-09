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
  
  navigateToClassInfo(classInfo: DayClass): void {
    this._router.navigate([`users/admin/classes/${classInfo.classId}/${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`])
  }
}
