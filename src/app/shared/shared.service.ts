import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { ResponseType } from 'src/environments/constants';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _toastr: ToastrService) { }

  validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailRegex.exec(email)
  }

  isControlInvalid(control: AbstractControl, errorName?: string) {
    let invalid: boolean = false
    if (errorName) {
      invalid = control.errors?.[errorName]
    }

    return control.invalid && control.touched && invalid 
  }

  showError(text?: string, timeout = 8000) {
    this._showResponse(ResponseType.ERROR, text)
  }

  showSuccess(text?: string, timeout = 8000) {
    this._showResponse(ResponseType.SUCCESS, text)
  }

  getFormattedDayMonth(date: Date): string {
    return date.getDate() + '/' + (date.getMonth() + 1);
  }

  private _showResponse(type: ResponseType, text?: string, timeout = 8000) {
    let message = ''
    if (text) message = text
    else if (type === ResponseType.SUCCESS)  message = 'Successful!'
    else message = 'An unexpected error occured!'
    
    this._toastr[type](message, undefined, {
      closeButton: true, 
      positionClass: 'toast-bottom-right',
      timeOut: timeout,
    })
  }
}
