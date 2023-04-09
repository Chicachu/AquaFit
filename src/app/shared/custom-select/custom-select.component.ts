import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() id: string
  @Input() label: string
  @Input() selectedValue: string
  @Input() values: string[]
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
    this.selectedValue = value
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  registerOnChange(fn: any): void {
    this.changed = fn
  }

  registerOnTouched(fn: any): void {
    this.touched = fn
  }

  onChange(event: Event) {
    const value: string = (<HTMLInputElement>event.target).value
    this.changed(value)
  }
}
