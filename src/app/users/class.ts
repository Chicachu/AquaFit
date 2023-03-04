import { Currency } from "../types/enums/currency"

export type Class = {
  days: string,
  startTime: Date,
  prices: [
    {
      currency: Currency,
      value: number
    }
  ]
}