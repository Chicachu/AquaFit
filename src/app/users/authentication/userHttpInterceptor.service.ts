import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Injectable()
export class UserHttpInterceptor implements HttpInterceptor {
  totalRequests = 0

  constructor(private _loaderService: LoaderService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.setLoading(true)
    this.totalRequests++
    httpRequest.headers.set('Access-Control-Allow-Origin', '*')
    httpRequest.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    httpRequest.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    httpRequest.headers.set('Content-Type', 'application/json')
    httpRequest.headers.set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiM2Y2YmU2Yi02MzIwLTRkM2YtYmJkNy1hYjI2ZWM0NGVjYTkiLCJpYXQiOjE2Nzc2NDUwMDZ9.9Igd1Rg06QKc5YGFKdnYV-3DcDPvR1dlgZXeI7t9NF4')
    return next.handle(httpRequest).pipe(
      finalize(() => {
        this.totalRequests--
        console.log(this.totalRequests)
        if (this.totalRequests == 0) {
          this._loaderService.setLoading(false)
        }
      })
    )
  }
}