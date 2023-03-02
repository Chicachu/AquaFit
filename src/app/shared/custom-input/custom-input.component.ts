import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInputType } from './custom-input-type';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() type: CustomInputType
  @Input() id: string
  @Input() label: string
  @Input() value: string = ''
  @Input() placeholder: string = ''
  @Input() required: boolean
  @Input() error: boolean

  public changed: (value: any) => void
  public touched: () => void

  asterisk = ''

  ngOnInit() {
    if (this.required) {
      this.asterisk = '*'
    }
  }
  
  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.changed = fn
  }

  registerOnTouched(fn: any): void {
    this.touched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  onChange(event: Event) {
    const value: string = (<HTMLInputElement>event.target).value
    this.changed(value)
  }
}
