import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [RouterLink, AuthorListComponent],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent {
  auteursList: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((reponseAuthor) => {
      this.auteursList = reponseAuthor;

      console.log(this.auteursList);
    });
  }
  onDelete(id: any): void {
    console.log(this.auteursList);

    // Appeler le service pour supprimer l'auteur
    this.authorService.deleteAuthor(id).subscribe();
    console.log('Auteur supprimé avec succès');
    // Récupérer la liste des auteurs après suppression
  }
}
