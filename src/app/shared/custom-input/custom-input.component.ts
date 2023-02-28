import { Component, Input } from '@angular/core';
import { CustomInputType } from './custom-input-type';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() type: CustomInputType
  @Input() id: string
  @Input() label: string
  @Input() required: boolean
  asterisk = ''

  ngOnInit() {
    console.log("CHECKING REQUIRED")
    if (this.required) {
      console.log("IS REQUIRED")
      this.asterisk = '*'
    }
  }
}