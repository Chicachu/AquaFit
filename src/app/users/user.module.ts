import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    AdminModule,
    BryntumCalendarModule,
    CommonModule, 
    UserRoutingModule
  ], 
})
export class UserModule { }
