import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { AuthorUpdateComponent } from './components/author-update/author-update.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { logAuth } from './logAuth.guard';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { DetailAuthorComponent } from './components/detail-author/detail-author.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  { path: 'accueil', component: AccueilComponent },

  { path: 'auteurList', component: AuthorListComponent },

  { path: 'livreList', component: BookListComponent },

  {
    path: 'auteurCreate',
    component: AuthorCreateComponent,
    canActivate: [authGuardGuard],
  },

  {
    path: 'livreCreate',
    component: BookCreateComponent,
    canActivate: [authGuardGuard],
  },

  { path: 'auteurUpdate/:id', component: AuthorUpdateComponent },

  { path: 'livreUpdate/:id', component: BookUpdateComponent },

  { path: 'auteurDetail/:id', component: DetailAuthorComponent },

  { path: 'livreDetail/:id', component: DetailBookComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent },
];
