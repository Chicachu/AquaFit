import { Component } from '@angular/core';
import { CustomInputType } from '../../../shared/custom-input/custom-input-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  textInput = CustomInputType.TEXT

  register(event: MouseEvent) {
    // call service and register new user
  }
}
