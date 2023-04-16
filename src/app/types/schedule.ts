import { Currency } from "./enums/currency"
import { Discount } from "./enums/discount"
import { Paid } from "./enums/paid"

export type Schedule = {
  classId: string
  clientId: string
  sessions: number
  extraSessions?: number
  startDate: Date
  datesCheckedIn?: Date[]
  datesCancelled?: Date[]
  discount?: {
    amount: number
    currency: Currency
    offerType: Discount
  }
  paid?: Paid
  payments?: {
    paymentId: string
    amount: number
  }[]
  autoEnroll?: boolean
}