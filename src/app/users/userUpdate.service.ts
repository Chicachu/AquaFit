import { Injectable } from "@angular/core"
import { Role } from "../types/enums/role"
import { User } from "../types/user"

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
  _user: User

  constructor() { }

  set user(user: User) {
    this._user = {
      username: user.username,
      accessToken: user.accessToken,
      role: user.role,
    }
    sessionStorage.setItem('user', JSON.stringify(this._user))
  }

  get user() {
    this._checkSessionStorage()
    return this._user
  }

  get isUserLoggedIn(): boolean {
    this._checkSessionStorage()
    return !!this._user
  }

  get userRole(): Role {
    this._checkSessionStorage()
    return this._user.role
  }

  _checkSessionStorage() {
    if (!this._user) {
      this._user = <User>JSON.parse(sessionStorage.getItem('user')!)
    }
  }
}