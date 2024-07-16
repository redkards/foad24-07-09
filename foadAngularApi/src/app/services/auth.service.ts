import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  logIn(credentials: any): any {
    return this.http.post(this.url, credentials);
  }
}
