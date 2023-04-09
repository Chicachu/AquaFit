import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({name: 'Date'})
export class DatePipe implements PipeTransform {
  transform(date: Date) {
    return moment(date).format('LL')
  }
}
