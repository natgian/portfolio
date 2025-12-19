import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    title: 'Nathalie Giancaspro - Fullstack Developer',
    component: Home,
  },
  {
    path: 'legal-notice',
    title: 'Legal Notice',
    component: LegalNotice,
  },
];
