import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['auteurCreate']);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['accueil']);
  }
}
