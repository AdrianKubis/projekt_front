import { HTTP_INTERCEPTORS, HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private API_URL = 'https://localhost/api';

  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLocalRequest = req.url.startsWith('/assets');
    if (isLocalRequest) {
      return this.http.request(req);
    }
    return this.handleRequest(req, next);
  }

  private handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.cloneRequest(req));
  }

  private cloneRequest(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.token.getToken();
    if (token != null) {
      return req.clone({
        url: `${this.API_URL}${req.url}`,
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return req;
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
