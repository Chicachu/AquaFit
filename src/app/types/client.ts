import { Currency } from "./enums/currency"

export type Client = {
  _id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email?: string
  credits?: {
    amount: number
    currency: Currency
  }
}