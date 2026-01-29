import { Routes } from '@angular/router';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Home } from './pages/home/home';
import { ProjectDetail } from './features/projects/pages/project-detail/project-detail';
import { NotFound } from './pages/not-found/not-found';

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
  {
    path: 'projects/:id',
    component: ProjectDetail,
  },
  {
    path: '**',
    component: NotFound,
  },
];
