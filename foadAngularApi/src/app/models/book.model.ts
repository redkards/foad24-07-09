import { Author } from './author.model';

export interface Book {
  id: number;
  title: string;
  coverText: string;
  comment: string;
  idAuthor: number;
  author: Author;
}
