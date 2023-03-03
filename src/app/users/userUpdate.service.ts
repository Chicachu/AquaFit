import { Injectable } from "@angular/core"
import { filter, Observable, Observer, share, Subscription } from "rxjs"
import { User } from "../types/user"

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
  _user: User

  constructor() { }

  set user(user: User) {
    console.log("Setting user: ")
    console.log(user)
    this._user = user
  }

  get user() {
    console.log("getting user: ")
    console.log(this._user)
    return this._user
  }
}