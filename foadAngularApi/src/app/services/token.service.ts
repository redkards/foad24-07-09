import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

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
}
