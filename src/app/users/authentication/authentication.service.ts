import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../types/user';
import { Observable, take } from 'rxjs';
import { httpBaseUrl } from 'src/environments/constants';
import { Role } from 'src/app/types/enums/role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this._http.post<User>(`${httpBaseUrl}/auth/login`, { username, password }).pipe(take(1))
  }

  register(username: string, password: string, role: Role): Observable<User> {
    return this._http.post<User>(`${httpBaseUrl}/auth/register`, { username, password, role }).pipe(take(1))
  }
}
