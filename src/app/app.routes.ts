import { Routes } from '@angular/router';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Imprint } from './pages/imprint/imprint';
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
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: 'imprint',
    component: Imprint,
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
