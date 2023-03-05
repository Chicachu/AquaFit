import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseType } from 'src/environments/constants';
import { SharedService } from '../shared.service';
import { CalendarService } from './calendar.service';
import { Day } from './types/day';
import { DayClass } from './types/dayClass';
import { MonthClass } from './types/monthClass';

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarReady = false;
  monthMap: Map<number, DayClass[]> = new Map<number, DayClass[]>()
  dates: Array<Date>
  days = Object.values(Day)
  date = new Date()
  monthlyClasses: MonthClass[]

  @Output() selected = new EventEmitter()

  constructor(private _calendarService: CalendarService, private _sharedService: SharedService) {
    this.dates = this._getCalendarDays(this.date);
  }

  ngOnInit(): void {
    this.getClassesForMonth()
  }

  getClassesForMonth() {
    this.calendarReady = false
    this._calendarService.getClassesForMonth(this.date.getMonth(), this.date.getFullYear()).subscribe({
      next: (res: MonthClass[]) => {
        this.monthlyClasses = res

        this.initializeMonthMap()
        this.calendarReady = true
      },
      error: ({error}) => {
        this._sharedService.showResponse(ResponseType.ERROR, 'Could not get classes for this month. Refresh and try again.', 500)
      }
    })
  }

  initializeMonthMap(): void {
    const classesForDay: DayClass[] = []
    this.dates.forEach((day) => {
      this.monthMap.set(this._getDateWithoutTime(day).getTime(), [])
    })

    this.monthlyClasses.forEach((mClass) => {
      mClass.classes.forEach((c) => {
        const dayClasses = this.monthMap.get(this._getDateWithoutTime(new Date(c.date)).getTime())!
        dayClasses.push({
          classId: mClass.classId,
          startTime: new Date(c.date),
          location: mClass.location, 
          checkedIn: c.checkedIn, 
          cancelled: c.cancelled
        })
      })
    })
  }

  getClassesForDay(date: Date): DayClass[] {
    return this.monthMap.get(this._getDateWithoutTime(date).getTime())!
  }

  getFormattedDate(): string {
    return this._sharedService.formatDate(this.date)
  }

  setMonth(inc: number): void {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()]
    console.log(month + inc)
    this.date = new Date(year, month + inc, 1)
    this.dates = this._getCalendarDays(this.date)
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

  private _getCalendarDays(date = new Date): Array<Date> {
    const calendarStartTime =  this._getCalendarStartDay(date)?.getTime();

    return this._range(0, 41)
      .map(num => new Date(calendarStartTime! + DAY_MS * num));
  }

  private _range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }

  private _getCalendarStartDay(date = new Date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this._range(1,7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 0)
  }
}
