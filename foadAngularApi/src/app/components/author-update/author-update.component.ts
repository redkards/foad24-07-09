import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-update.component.html',
  styleUrl: './author-update.component.css',
})
export class AuthorUpdateComponent {
  auteur: FormGroup;
  submitted: boolean = false;
  authorId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) {
    this.auteur = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.authorId) {
      this.authorService
        .getAuthorById(this.authorId)
        .subscribe((data: Author) => {
          console.log(data);

          this.auteur.patchValue(data);
        });
    }
  }

  updateOneAuthor(): void {
    console.log(this.auteur.value);
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));

    this.authorService
      .updateAuthor(this.auteur.value, this.authorId)
      .subscribe();

    this.router.navigate(['/auteurList']); // redirect to authors list after form submission
  }

  get form() {
    return this.auteur.controls;
  } // getter to access form controls
}
