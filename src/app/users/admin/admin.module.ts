import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { AdminComponent } from './admin.component';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    ClassesComponent
  ],
  imports: [
    CalendarModule,
    CommonModule,
    SharedModule
  ], 
  exports: [
    AdminComponent,
    ClassesComponent
  ]
})
export class AdminModule { }
