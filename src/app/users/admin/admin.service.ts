import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Client } from 'src/app/types/client';
import { DayOfWeek } from 'src/app/types/enums/dayOfWeek';
import { Meridiem } from 'src/app/types/enums/meridiem';
import { httpBaseUrl } from 'src/environments/constants';
import { Class } from '../../types/class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this._http.get<Class[]>(`${httpBaseUrl}/classes`).pipe(take(1))
  }

  getClients(classId: string): Observable<Client[]> {
    return this._http.get<Client[]>(`${httpBaseUrl}/schedules/classes/${classId}/clients`).pipe(take(1))
  }

  getClass(classId: string, day: number, month: number, year: number): Observable<Class> {
    const date = this._setDate(day, month, year)
    
    return this._http.get<Class>(`${httpBaseUrl}/classes/${classId}/${date.getTime()}`).pipe(take(1))
  }

  addNewClass(newClass: {location: string, days: DayOfWeek[], startTime: { time: number, meridiem: Meridiem }, maxAttendees: number}): Observable<Class> {
    return this._http.post<Class>(`${httpBaseUrl}/classes`, newClass).pipe(take(1))
  }

  cancelClass(classId: string, day: number, month: number, year: number, addFreeSessions: boolean): Observable<Class> {
    const date = this._setDate(day, month, year)

    return this._http.patch<Class>(`${httpBaseUrl}/classes/${classId}/${date.getTime()}`, { addFreeSessions }).pipe(take(1))
  }

  checkInClient(clientId: string, classId: string, checkIn: boolean, day: number, month: number, year: number) {
    const date = this._setDate(day, month, year)

    console.log(`${httpBaseUrl}/schedules/classes/${clientId}/clients/${classId}/checkin/${date.getTime()}`)
    return this._http.patch(`${httpBaseUrl}/schedules/classes/${clientId}/clients/${classId}/checkin/${date.getTime()}`, { checkIn }).pipe(take(1))
  }

  private _setDate(day: number, month: number, year: number): Date {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setDate(day)
    date.setMonth(month)
    date.setFullYear(year)

    return date;
  }
}
