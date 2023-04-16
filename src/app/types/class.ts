import { Location } from "../shared/calendar/types/location"
import { Currency } from "../types/enums/currency"
import { Client } from "./client"
import { DayOfWeek } from "./enums/dayOfWeek"

export type Class = {
  _id: string
  classLocation: Location
  startTime: {
    time: number, 
    meridiem: string
  },
  days: DayOfWeek[],
  prices: [
    {
      currency: Currency,
      value: number
    }
  ]
  maxAttendees: number
  cancelled: boolean
  checkedIn: boolean
  clients: Client[]
}