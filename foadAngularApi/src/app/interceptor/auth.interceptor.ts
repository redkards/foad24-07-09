import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const auth = inject(TokenService);
  const token = auth.isLogged();

  if (!token) {
    return next(req);
  }

  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + token,
    // Authorization: 'Bearer $[token]'
  });

  const newReq = req.clone({
    headers,
  });

  return next(newReq);
}
