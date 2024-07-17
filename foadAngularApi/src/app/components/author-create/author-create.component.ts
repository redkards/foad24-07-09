import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorService } from '../../services/author.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-create.component.html',
  styleUrl: './author-create.component.css',
})
export class AuthorCreateComponent {
  constructor(
    private formB: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {}

  createAuthorForm: FormGroup = this.formB.group({
    LastName: ['', [Validators.required]],
    FirstName: ['', [Validators.required]],
  });

  onSubmit() {
    console.log(this.createAuthorForm.value);
    //send the form data to the server here
    this.authorService.createAuthor(this.createAuthorForm.value).subscribe();

    console.log(this.createAuthorForm);

    // this.router.navigate(['/auteurList']); // redirect to authors list after form submission
    this.createAuthorForm.reset();
  }
}
