import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'DayOfWeek'})
export class DayOfWeekPipe implements PipeTransform {
  transform(days: string[]) {
    return days.join(', ') || ''
  }
}