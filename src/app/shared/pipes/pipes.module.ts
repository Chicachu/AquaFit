import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayOfWeekPipe } from './dayOfWeek.pipe';
import { CurrencyPipe } from './currency.pipe';
import { DayMonthPipe } from './dayMonth.pipe';
import { TimePipe } from './time.pipe';
import { DatePipe } from './date.pipe';



@NgModule({
  declarations: [
    CurrencyPipe,
    DatePipe,
    DayMonthPipe,
    DayOfWeekPipe,
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPipe,
    DatePipe,
    DayMonthPipe,
    DayOfWeekPipe,
    TimePipe
  ]
})
export class PipesModule { }
