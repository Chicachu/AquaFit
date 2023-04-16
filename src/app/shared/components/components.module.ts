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
import { FormsModule } from '@angular/forms';
import { CustomSearchSelectComponent } from './custom-search-select/custom-search-select.component';


@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomSelectComponent,
    CustomDatePickerComponent,
    CustomSearchSelectComponent
  ],
  providers: [
    MatDatepickerModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomSelectComponent,
    CustomDatePickerComponent,
    CustomSearchSelectComponent
  ]
})
export class ComponentsModule { }
