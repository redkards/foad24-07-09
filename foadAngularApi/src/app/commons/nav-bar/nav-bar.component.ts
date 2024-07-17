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

  connected: boolean = true;

  logout(): void {
    this.tokenService.logout();
    console.log();
  }
}
