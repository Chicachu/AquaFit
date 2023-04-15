import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { UserUpdateService } from '../userUpdate.service';

@Injectable()
export class UserHttpInterceptor implements HttpInterceptor {
  totalRequests = 0

  constructor(private _loaderService: LoaderService, private _userUpdateService: UserUpdateService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.setLoading(true)
    this.totalRequests++
    console.log(this._userUpdateService.user?.accessToken!)

    httpRequest = httpRequest.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      }
    })

    if (this._userUpdateService.user?.accessToken) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + this._userUpdateService.user?.accessToken!
        }
      })
    }

    console.log(httpRequest)

    return next.handle(httpRequest).pipe(
      finalize(() => {
        this.totalRequests--
        if (this.totalRequests == 0) {
          this._loaderService.setLoading(false)
        }
      })
    )
  }
}