import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomDatePickerComponent,
      multi: true
    }
  ]
})
export class CustomDatePickerComponent implements ControlValueAccessor {
  @Input() id: string
  @Input() label: string
  @Input() required: boolean
  @Input() error: boolean
  value: Date 
  asterisk = ''
  
  public changed: (value: any) => void
  public touched: () => void

  ngOnInit() {
    if (this.required) {
      this.asterisk = '*'
    }
  }

  set val(val: Date) {
    this.value = val
    this.changed(val)
    this.touched()
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.changed = fn
  }

  registerOnTouched(fn: any): void {
    this.touched = fn
  }

  onChange(event: MatDatepickerInputEvent<any,any>) {
    const value: string = event.target.value
    this.changed(value)
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }
}
