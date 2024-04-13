import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'estoque',
    loadComponent: () => import('./components/estoque/estoque.component').then(
      (m) => m.EstoqueComponent
    ),
  }
];
