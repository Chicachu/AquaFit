import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'DayMonth'})
export class DayMonthPipe implements PipeTransform {
  transform(date: Date) {
    return date.getDate() + '/' + (date.getMonth() + 1);
  }
}