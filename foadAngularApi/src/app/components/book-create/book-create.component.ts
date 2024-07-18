import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css',
})
export class BookCreateComponent implements OnInit {
  constructor(
    private formB: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private authorService: AuthorService
  ) {}

  createBookForm: FormGroup = this.formB.group({
    title: ['', [Validators.required]],
    coverText: ['', [Validators.required]],
    comment: ['', [Validators.required]],
    idAuthor: [null, [Validators.required]],
  });
  author: Author[] = [];

  onSubmit() {
    console.log(this.createBookForm.value);
    //send the form data to the server here
    this.bookService.addBook(this.createBookForm.value).subscribe();

    console.log(this.createBookForm.value);

    // this.router.navigate(['/auteurList']); // redirect to authors list after form submission
    this.createBookForm.reset();
  }

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((res) => {
      this.author = res;
    });
  }
}
