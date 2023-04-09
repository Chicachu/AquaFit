import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() showModal: boolean
  @Input() title: string
  @Input() content: string
  @Input() buttons: { text: string, event: Function }[]

  handleClick(buttonTitle: string) {
    this.buttons.forEach((button) => {
      if (button.text === buttonTitle) {
        button.event()
      }
    })
  }
}
