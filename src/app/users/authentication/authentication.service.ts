import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../types/user';
import { Observable, take } from 'rxjs';
import { httpBaseUrl } from 'src/environments/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = httpBaseUrl + '/api'

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this._http.post<User>(`${this.baseUrl}/auth/login`, { username, password }).pipe(take(1))
  }
}
