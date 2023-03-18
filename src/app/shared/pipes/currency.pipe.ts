import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'Currency'})
export class CurrencyPipe implements PipeTransform {
  transform(prices: { currency: string, value: number }[]) {
    return `${prices[0].value} ${prices[0].currency}/${prices[1].value} ${prices[1].currency}`
  }
}