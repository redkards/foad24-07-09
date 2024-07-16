import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { AuthorUpdateComponent } from './components/author-update/author-update.component';
import { AuthorDeleteComponent } from './components/author-delete/author-delete.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { logAuth } from './logAuth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  { path: 'accueil', component: AccueilComponent },

  { path: 'auteurList', component: AuthorListComponent },

  {
    path: 'auteurCreate',
    component: AuthorCreateComponent,
    canActivate: [logAuth],
  },

  { path: 'auteurUpdate', component: AuthorUpdateComponent },

  { path: 'auteurDelete', component: AuthorDeleteComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent },
];
