import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseType } from 'src/environments/constants';
import { CustomInputType } from '../../../shared/custom-input/custom-input-type';
import { SharedService } from '../../../shared/shared.service';
import { User } from '../../../types/user';
import { UserUpdateService } from '../../userUpdate.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isUserLoggedIn: boolean
  usernameInputType = CustomInputType.TEXT
  passwordInputType = CustomInputType.PASSWORD
  loginGroup: FormGroup
  username: FormControl
  password: FormControl

  constructor(private _sharedService: SharedService, private _authService: AuthenticationService, private _router: Router, private _userUpdateService: UserUpdateService) {
    this.isUserLoggedIn = this._userUpdateService.isUserLoggedIn
    if (!this.isUserLoggedIn) {
      this.loginGroup = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      })
    }
  }

  login(event: MouseEvent) {
    this.loginGroup.markAllAsTouched()
    if (!this.loginGroup.invalid) {
      this._authService.login(this.loginGroup.controls['username'].value, this.loginGroup.controls['password'].value).subscribe({
        next: (res: any) => {
          this._userUpdateService.user = res.user
          this._router.navigate(['/'])
        }, 
        error: (error) => {
          this._sharedService.showResponse(ResponseType.ERROR)
          console.log(error)
        }
      })
    }
  }

  isInvalid(control: AbstractControl, errorName?: string) {
    return this._sharedService.isControlInvalid(control, errorName)
  }
}
