import { Pipe, PipeTransform } from '@angular/core'
import { Day } from '../calendar/types/day'
import { DayOfWeek } from 'src/app/types/enums/dayOfWeek'

@Pipe({name: 'DayOfWeek'})
export class DayOfWeekPipe implements PipeTransform {
  transform(days: DayOfWeek[]) {
    return days.join(', ') || ''
  }
}