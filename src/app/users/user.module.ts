import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BryntumCalendarModule } from '@bryntum/calendar-angular';
import { AdminModule } from './admin/admin.module';
import { ProfileDetailsComponent } from './profile/profile-details.component';



@NgModule({
  declarations: [
    ProfileDetailsComponent
  ],
  imports: [
    AdminModule,
    BryntumCalendarModule,
    CommonModule, 
    UserRoutingModule
  ], 
})
export class UserModule { }
