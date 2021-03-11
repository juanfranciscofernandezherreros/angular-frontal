import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('accept')) {
      
      request = request.clone({headers: request.headers.set('accept', 'application/json')});
    }
    request = request.clone({headers: request.headers.set('Accept-Language', 'es-ES')});
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    return next.handle(request); 
  }
 
 
}