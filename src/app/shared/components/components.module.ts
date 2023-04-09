import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomSelectComponent,
    CustomDatePickerComponent
  ],
  providers: [
    MatDatepickerModule
  ],
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomSelectComponent,
    CustomDatePickerComponent
  ]
})
export class ComponentsModule { }
