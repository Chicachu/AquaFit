import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './header/info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }