import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = this.formB.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private formB: FormBuilder, private authService:AuthService) {}

  get form() {
    return this.loginForm.controls;
  } // getter to access form controls
  addAuthor(): void {
    console.log(this.loginForm.value);
    this.authService.logIn(this.loginForm.value).subscribe(
      (data:any) => console.log(data));


  }
}
}
