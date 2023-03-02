import { RouterPreloader } from "@angular/router"
import { Role } from "./enums/role"

export type User = {
  username?: string
  password?: string
  role: Role
  accessToken?: string
}