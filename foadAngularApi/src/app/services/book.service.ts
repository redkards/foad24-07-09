import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    {
      return this.httpClient.get<Book[]>(`${this.apiUrl}/books`);
    }
  }

  getBookById(id: number): Observable<Book> {
    {
      return this.httpClient.get<Book>(`${this.apiUrl}/books/${id}`);
    }
  }

  addBook(book: Book): Observable<Book> {
    {
      return this.httpClient.post<Book>(`${this.apiUrl}/books`, book);
    }
  }

  updateBook(book: Book, id: number): Observable<Book> {
    {
      return this.httpClient.put<Book>(`${this.apiUrl}/books/${id}`, book);
    }
  }
  deleteBook(id: number): Observable<any> {
    {
      return this.httpClient.delete<any>(`${this.apiUrl}/books/${id}`);
    }
  }
}
