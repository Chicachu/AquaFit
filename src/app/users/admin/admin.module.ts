import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { AdminComponent } from './admin.component';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';



@NgModule({
  declarations: [
    AdminComponent,
    ClassesComponent
  ],
  imports: [
    CalendarModule,
    CommonModule,
  ], 
  exports: [
    AdminComponent,
    ClassesComponent
  ]
})
export class AdminModule { }
