import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from '../shared.module';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { RouterModule } from '@angular/router';
import { CalendarAlertComponent } from './calendar-alert/calendar-alert.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
