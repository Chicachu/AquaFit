import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserHttpInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    httpRequest.headers.set('Access-Control-Allow-Origin', '*')
    httpRequest.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    httpRequest.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    httpRequest.headers.set('Content-Type', 'application/json')
    httpRequest.headers.set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiM2Y2YmU2Yi02MzIwLTRkM2YtYmJkNy1hYjI2ZWM0NGVjYTkiLCJpYXQiOjE2Nzc2NDUwMDZ9.9Igd1Rg06QKc5YGFKdnYV-3DcDPvR1dlgZXeI7t9NF4')
    
    return next.handle(httpRequest);
  }
}