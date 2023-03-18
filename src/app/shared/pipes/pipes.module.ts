import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayOfWeekPipe } from './dayOfWeek.pipe';
import { CurrencyPipe } from './currency.pipe';



@NgModule({
  declarations: [
    CurrencyPipe,
    DayOfWeekPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPipe,
    DayOfWeekPipe
  ]
})
export class PipesModule { }
