import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  logIn(credentials: any): Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials);
  }
}
