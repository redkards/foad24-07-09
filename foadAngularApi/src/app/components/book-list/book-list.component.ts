import { Component, inject } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  livresList: Book[] = [];
  auteur: Author[] = [];

  isAdmin = inject(AuthService).getRoles('ROLE_ADMIN');

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((reponseLivre) => {
      this.livresList = reponseLivre;

      console.log(this.livresList);
    });

    this.authorService.getAllAuthors().subscribe((reponseAuthor) => {
      this.auteur = reponseAuthor;

      console.log(this.auteur);
    });
  }

  onDelete(id: any): void {
    console.log(this.livresList);

    // Appeler le service pour supprimer le livre
    this.bookService.deleteBook(id).subscribe();
    console.log('livre supprimé avec succès');
    // Récupérer la liste des livres après suppression

    this.livresList = this.livresList.filter((livre) => livre.id !== id); // remove the author from the list aftelivresList
  }
}
