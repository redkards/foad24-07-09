import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css',
})
export class BookUpdateComponent {
  livre: FormGroup;
  submitted: boolean = false;
  bookId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.livre = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      coverText: ['', [Validators.required, Validators.minLength(3)]],
      comment: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe((data: Book) => {
        console.log(data);

        this.livre.patchValue(data);
      });
    }
  }

  updateOneBook(): void {
    console.log(this.livre.value);
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.updateBook(this.livre.value, this.bookId).subscribe();

    this.router.navigate(['/livreList']); // redirect to books list after form submission
    this.livre.reset();
  }

  get form() {
    return this.livre.controls;
  } // getter to access form controls
}
