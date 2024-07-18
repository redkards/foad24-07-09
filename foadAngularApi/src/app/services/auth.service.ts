import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';
import { ICredentials } from '../_interfaces/credentials';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url = 'http://localhost:8000/api/login_check';

  constructor(private http: HttpClient) {}

  tokenService = inject(TokenService);
  decodeToken = inject(TokenService).decodeToken();

  logIn(credentials: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials);
  }

  isloggedIn(): boolean {
    return !!this.tokenService.isLogged();
  }

  getRoles(value: string): boolean {
    if (this.decodeToken) {
      return this.decodeToken.roles.some((role: string) => role === value);
    }

    return false;

    // const token = this.tokenService.isLogged();
    // if (!token) {
    //   return false;
    // }
    // const tokenPayload: any = JSON.parse(atob(token.split('.')[1]));
    // return tokenPayload.roles;
  }
}
