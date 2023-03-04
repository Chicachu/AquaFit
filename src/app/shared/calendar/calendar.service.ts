import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpBaseUrl } from 'src/environments/constants';
import { MonthClass } from './types/monthClass';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private _http: HttpClient) { }

  getClassesForMonth(month: number, year: number): Observable<MonthClass[]> {
    const requestObj = {
      month, 
      year
    }
    return this._http.post<MonthClass[]>(`${httpBaseUrl}/classes/monthSearch`, requestObj)
  }
}
