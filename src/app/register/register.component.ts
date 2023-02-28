import { Component } from '@angular/core';
import { CustomInputType } from '../shared/custom-input/custom-input-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usernameInputType = CustomInputType.TEXT
  passwordInputType = CustomInputType.PASSWORD
}
