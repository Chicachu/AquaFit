import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { httpBaseUrl } from 'src/environments/constants';
import { Class } from '../../types/class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  getClass(classId: string, day: number, month: number, year: number): Observable<Class> {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)
    
    return this._http.get<Class>(`${httpBaseUrl}/classes/${classId}/${date.getTime()}`).pipe(take(1))
  }

  cancelClass(classId: string, day: number, month: number, year: number, addFreeSessions: boolean): Observable<Class> {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)

    return this._http.patch<Class>(`${httpBaseUrl}/classes/${classId}/${date.getTime()}`, { addFreeSessions })
  }
}
