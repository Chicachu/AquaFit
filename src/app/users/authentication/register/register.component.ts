import { Component } from '@angular/core';
import { CustomInputType } from '../../../shared/components/custom-input/custom-input-type';
import { AuthenticationService } from '../authentication.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/types/user';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/types/enums/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  text = CustomInputType.TEXT
  password = CustomInputType.PASSWORD
  registerGroup: FormGroup

  constructor(private _authService: AuthenticationService, private _sharedService: SharedService, private _router: Router) {
    this.registerGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, { validators: this.passwordsMatchValidator})
  }

  register() {
    this.registerGroup.markAllAsTouched()
    if (!this.registerGroup.invalid) {
      this._authService.register(this.registerGroup.controls['username'].value, this.registerGroup.controls['password'].value, Role.ADMIN).subscribe({
        next: (rsp: User) => {
          this._sharedService.showSuccess('You have been successfully registered. You may now log in.')
          this._router.navigate(['/login'])
        }, 
        error: ({error}) => {
          this._sharedService.showError(error.message)
        }
      })
    }
  }

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsDoNotMatch: true };
}
}
