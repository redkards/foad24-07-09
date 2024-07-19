import { Component, inject } from '@angular/core';
import { Author } from '../../models/author.model';
import { Book } from '../../models/book.model';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css',
})
export class DetailBookComponent {
  livreDetail: Book[] = [];

  auteurLivre: Author[] = [];

  isAdmin = inject(AuthService).getRoles('ROLE_ADMIN');

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((reponseLivre) => {
      this.livreDetail = reponseLivre;

      console.log(this.livreDetail);
    });

    this.authorService.getAllAuthors().subscribe((reponseAuthor) => {
      this.auteurLivre = reponseAuthor;

      console.log(this.auteurLivre);
    });
  }

  onGetBook(id: number): void {
    this.bookService.getBookById(id).subscribe((data: Book) => {
      console.log(data);
    });
    this.authorService.getAuthorById(id).subscribe((data: Author) => {
      console.log(data);
    });
  }
}
