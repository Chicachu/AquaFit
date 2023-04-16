import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'DayMonth'})
export class DayMonthPipe implements PipeTransform {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  transform(date: Date) {
    return date.getDate() + ' of ' + this.months[date.getMonth()] 
  }
}