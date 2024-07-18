import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private tokenService: TokenService) {}

  connected: boolean = false;

  ngOnInit(): void {
    this.connected = this.isLogged();
    console.log(this.connected); // Afficher la connexion dans la console
    if (this.tokenService.isLogged()) {
      this.connected = true; // Si le token n'est pas présent, déconnecter l'utilisateur
    }

    // this.logout(); // Pour tester la déconnexion, commenter cette ligne et déconnecter l'utilisateur dans la console
    // this.connected = false; // Pour tester la déconnexion, commenter cette ligne et déconnecter l'utilisateur dans la console
    // this.connected = true; // Pour tester la connexion, commenter cette ligne et déconnecter l'utilisateur dans la console
  }

  isLogged(): any {
    const token = localStorage.getItem('storageToken');

    return token;
  }

  logout(): void {
    this.tokenService.logout();
    console.log();

    localStorage.clear(); //pour clear le localstorage
  }

  // Pour déconnecter, il faut supprimer le token de localStorage et rediriger vers la page d'accueil
  // Cela peut se faire dans le composant LoginComponent ou dans un service appelé AuthService
  // Exemple dans AuthService:
  // logout(): void {
  //   localStorage.removeItem('currentUserToken');
  //   this.router.navigate(['accueil']);
}
