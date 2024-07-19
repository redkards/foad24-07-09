import { TokenService } from './../../services/token.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface ICredentials {
  username: string;
  password: string;
}

interface IToken {
  access_token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = this.formB.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formB: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router // Inject Router to navigate to home page after successful login
  ) {}

  get form() {
    return this.loginForm.controls;
  } // getter to access form controls
  onLogin(): void {
    console.log(this.loginForm.value);
    this.authService.logIn(this.loginForm.value).subscribe((data) => {
      this.tokenService.saveToken(data.token); // Store token in local storage);

      console.log(data.token);

      this.tokenService.tokenInfo();
    });
  }
}
