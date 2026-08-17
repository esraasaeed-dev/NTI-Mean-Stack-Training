import { Routes } from '@angular/router';
import { Gallery } from './pages/gallery/gallery';
import { ContactUs } from './pages/contact-us/contact-us';
import { Teams } from './pages/teams/teams';
import { Home } from './pages/home/home';
export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },

  {
    path: 'gallery',
    component: Gallery
  },

  {
    path: 'contact-us',
    component: ContactUs
  },

  {
    path: 'teams',
    component: Teams
  }
];