import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { AdminComponent } from './admin/admin.component';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';
import { CalendarModule } from '../shared/calendar/calendar.module';



@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent
  ],
  imports: [
    BryntumCalendarModule,
    CalendarModule,
    CommonModule, 
    UserRoutingModule
  ], 
})
export class UserModule { }
