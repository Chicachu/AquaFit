import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from '../shared.module';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
