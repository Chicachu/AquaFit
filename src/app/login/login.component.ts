import { Component } from '@angular/core';
import { CustomInputType } from '../shared/custom-input/custom-input-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usernameInputType = CustomInputType.TEXT
  passwordInputType = CustomInputType.PASSWORD
}
