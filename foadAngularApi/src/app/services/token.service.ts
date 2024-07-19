import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const url = 'http://localhost:8000/api/login_check';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router, private http: HttpClient) {}

  TOKEN_KEY = 'auth-token';
  REFRESHTOKEN_KEY = 'auth-refreshtoken';

  saveToken(token: string): void {
    localStorage.setItem('storageToken', token);
    this.router.navigate(['accueil']);
  }

  isLogged(): any {
    const token = localStorage.getItem('storageToken');

    return token;
  }

  getToken(): any {
    const token = localStorage.getItem('storageToken');

    return token;
  }

  logout(): void {
    localStorage.removeItem('storageToken');
    this.router.navigate(['accueil']);
  }

  tokenInfo(): any {
    const token = localStorage.getItem('storageToken');
    if (token) {
      const tokenView = jwtDecode(token);
      return tokenView;
    }
    return null;
  }

  decodeToken(): any {
    const Token = this.getToken();
    if (Token) {
      const decodedToken = jwtDecode(Token);
      return decodedToken;
    }
    return null;
  }
  refreshToken(token: string) {
    return this.http.post(
      url + 'refreshtoken',
      {
        refreshToken: token,
      },
      httpOptions
    );
  }

  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(this.REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(this.REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(this.REFRESHTOKEN_KEY);
  }
}
