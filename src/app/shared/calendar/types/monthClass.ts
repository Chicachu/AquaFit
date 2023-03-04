import { Location } from './location'

export type MonthClass = {
  classId: string
  location: Location
  classes: {
    date: Date
    cancelled: boolean
    checkedIn: boolean
  }[]
}