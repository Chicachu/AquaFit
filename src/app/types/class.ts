import { Day } from "../shared/calendar/types/day"
import { Location } from "../shared/calendar/types/location"
import { Currency } from "../types/enums/currency"
import { Client } from "./client"

export type Class = {
  _id: string
  classLocation: Location
  startTime: {
    time: number, 
    meridiem: string
  },
  days: Day[],
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