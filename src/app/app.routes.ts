import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Offers } from './pages/offers/offers';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product', component: Product },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'offers', component: Offers },
  { path: '**', redirectTo: '' }
];
