import { Location } from "./location"

export type DayClass = {
  classId: string
  startTime: Date
  location: Location
  checkedIn: boolean
  cancelled: boolean
  lastDayClientIds: string[] | undefined
}