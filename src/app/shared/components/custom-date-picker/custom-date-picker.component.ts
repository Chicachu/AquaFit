import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss']
})
export class CustomDatePickerComponent {
  @Input() id: string
  @Input() label: string
  @Input() required: boolean
  @Input() error: boolean
  asterisk = ''

  ngOnInit() {
    if (this.required) {
      this.asterisk = '*'
    }
  }
}
