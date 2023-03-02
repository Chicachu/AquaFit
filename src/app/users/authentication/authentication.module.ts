import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UserHttpInterceptor } from './userHttpInterceptor.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ], 
  exports: [
    LoginComponent,
    RegisterComponent
  ], 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserHttpInterceptor, multi: true }
  ]
})
export class AuthenticationModule { }