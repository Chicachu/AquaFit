import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseType } from 'src/environments/constants';
import { SharedService } from '../shared.service';
import { CalendarService } from './calendar.service';
import { Day } from './types/day';
import { DayClass } from './types/dayClass';
import { MonthClass } from './types/monthClass';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarReady = false;
  monthMap: Map<number, DayClass[]> 
  days = Object.values(Day)
  date = new Date()

  @Output() selected = new EventEmitter()

  constructor(private _calendarService: CalendarService, private _sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.getClassesForMonth()
  }

  getClassesForMonth() {
    this.calendarReady = false
    this._calendarService.getClassesForMonth(this.date).subscribe({
      next: (res: any) => {
        this.monthMap = new Map(res.map((day: any) => {
          return [day[0], day[1]]
        }))

        console.log(this.monthMap)
        this.calendarReady = true
      },
      error: ({error}) => {
        this._sharedService.showError(error.message)
      }
    })
  }

  getDates(): Date[] {
    const dates: Date[] = []
    for (let [key, value] of this.monthMap) {
      dates.push(new Date(key))
    }

    return dates
  }

  getClassesForDay(date: Date): DayClass[] {
    return this.monthMap.get(this._getDateWithoutTime(date).getTime())!
  }

  setMonth(inc: number): void {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()]
    this.date = new Date(year, month + inc, 1)
    this.getClassesForMonth()
  }

  isSameMonth(date: Date): boolean {
    return date.getMonth() === this.date.getMonth();
  }

  private _getDateWithoutTime(date: Date): Date {
    const dateWithoutTime = new Date(date)
    dateWithoutTime.setHours(0, 0, 0, 0)
    return dateWithoutTime
  }
}
