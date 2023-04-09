import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({name: 'Time'})
export class TimePipe implements PipeTransform {
  transform(date: Date) {
    return moment(date).format('LT')
  }
}