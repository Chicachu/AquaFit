import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { AdminComponent } from './admin.component';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ClassesComponent } from './classes/classes.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    ClassDetailsComponent,
    NavigationBarComponent,
    ClassesComponent,
    ClientsComponent,
    ClientDetailsComponent
  ],
  imports: [
    CalendarModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ], 
  exports: [
    AdminComponent,
    ClassDetailsComponent
  ]
})
export class AdminModule { }
