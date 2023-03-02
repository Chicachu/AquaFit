import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() text: string
  @Output() click = new EventEmitter<MouseEvent>()

  clickButton(event: MouseEvent) {
    this.click.emit(event)
  }
}
