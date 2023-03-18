import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { httpBaseUrl } from 'src/environments/constants';
import { DayClass } from './types/dayClass';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private _http: HttpClient) { }

  getClassesForMonth(date: Date): Observable<Map<number, DayClass[]> > {
    const month = date.getMonth()
    const year = date.getFullYear()
    return this._http.get<Map<number, DayClass[]>>(`${httpBaseUrl}/calendar/${year}/${month}`).pipe(take(1))
  }
}
