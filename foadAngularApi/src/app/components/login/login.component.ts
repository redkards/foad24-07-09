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
import { IToken } from '../../_interfaces/token';

interface ICredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, AuthService],
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
    private TokenService: TokenService
  ) {}

  get form() {
    return this.loginForm.controls;
  } // getter to access form controls
  addAuthor(): void {
    console.log(this.loginForm.value);
    this.authService.logIn(this.loginForm.value).subscribe((data) => {
      console.log(data.access_token);
      this.TokenService.saveToken(data.access_token); // Store token in local storage);
    });
  }
}
