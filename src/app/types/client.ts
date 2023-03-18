import { Currency } from "./enums/currency"

export type Client = {
  firstName: string
  lastName: string
  phoneNumber: string
  email?: string
  credits?: {
    amount: number
    currency: Currency
  }
}