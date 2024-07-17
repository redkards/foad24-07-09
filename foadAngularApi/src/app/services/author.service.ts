import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    {
      return this.httpClient.get<Author[]>(`${this.apiUrl}/api/authors`);
    }
  }

  getAuthorById(id: number): Observable<Author> {
    {
      return this.httpClient.get<Author>(`${this.apiUrl}/api/authors/${id}`);
    }
  }

  createAuthor(author: Author): Observable<Author> {
    {
      return this.httpClient.post<Author>(`${this.apiUrl}/api/authors`, author);
    }
  }

  updateAuthor(author: Author, id: number): Observable<Author> {
    {
      return this.httpClient.put<Author>(
        `${this.apiUrl}/api/authors/${id}`,
        author
      );
    }
  }

  deleteAuthor(id: number): Observable<any> {
    {
      return this.httpClient.delete(`${this.apiUrl}/api/authors/${id}`);
    }
  }
}
