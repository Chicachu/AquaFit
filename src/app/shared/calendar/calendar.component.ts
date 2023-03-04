import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { Day } from './types/day';

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  dates: Array<Date>
  days = Object.values(Day)
  date = new Date()

  @Output() selected = new EventEmitter()

  constructor(private _sharedService: SharedService) {
    this.dates = this.getCalendarDays(this.date);
  }

  getFormattedDate(): string {
    return this._sharedService.formatDate(this.date)
  }

  setMonth(inc: number) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    console.log(month + inc)
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }

  isSameMonth(date: Date) {
    return date.getMonth() === this.date.getMonth();
  }

  private getCalendarDays(date = new Date): Array<Date> {
    const calendarStartTime =  this.getCalendarStartDay(date)?.getTime();

    return this.range(0, 41)
      .map(num => new Date(calendarStartTime! + DAY_MS * num));
  }

  private range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }

  private getCalendarStartDay(date = new Date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1,7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 0)
  }
}
