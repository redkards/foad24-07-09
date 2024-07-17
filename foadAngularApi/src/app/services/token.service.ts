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

  logout(): void {
    localStorage.removeItem('storageToken');
    this.router.navigate(['accueil']);
  }
}
