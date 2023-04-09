import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './header/info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './loader/loader.component';
import { PipesModule } from './pipes/pipes.module';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    CustomInputComponent,
    CustomButtonComponent,
    LoaderComponent,
    CustomModalComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    ToastrModule.forRoot()
  ], 
  exports: [
    HeaderComponent,
    InfoComponent,
    NavigationComponent,
    FooterComponent,
    CustomInputComponent,
    CustomButtonComponent,
    ToastrModule,
    LoaderComponent,
    PipesModule,
    CustomModalComponent,
    CustomSelectComponent
  ]
})
export class SharedModule { }