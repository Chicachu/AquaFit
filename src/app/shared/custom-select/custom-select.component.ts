import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  @Input() id: string
  @Input() label: string
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
