import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-search-select',
  templateUrl: './custom-search-select.component.html',
  styleUrls: ['./custom-search-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSearchSelectComponent),
      multi: true
    }
  ]
})
export class CustomSearchSelectComponent implements ControlValueAccessor {
  @Input() id: string
  @Input() label: string
  @Input() values: string[]
  @Input() placeholder: string = ''
  @Input() required: boolean
  @Input() error: boolean
  filteredValues: string[] | undefined
  value = ''
  asterisk = ''

  public changed: (value: any) => void
  public touched: () => void


  ngOnInit() {
    if (this.required) {
      this.asterisk = '*'
    }
    this.filterValues(null)
  }

  set val(val: string) {
    this.value = val
    this.changed(val)
    this.touched()
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

  filterValues(searchString: string | undefined | null) {
    if (searchString) {
      this.filteredValues = this.values.filter((v) => v.includes(searchString))
    } else {
      this.filteredValues = this.values
    }
  }

  toggleDropDown(show: boolean) {
    const dropdown = document.getElementById(this.id + '_dropdown')
    if (dropdown) {
      if (show) {
        dropdown.style.display = 'block'
      } else {
        dropdown.style.display = 'none'
        this.touched()
      }
    }
  }

  onChange(event: Event) {
    const value: string = (<HTMLInputElement>event.target).value
    this.filterValues(value)
    this.changed(value)
  }

  onSelect(value: string) {
    console.log('selecting ' + value)
    this.value = value
    this.toggleDropDown(false)
    this.changed(value)
    this.touched()
  }
}
