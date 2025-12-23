import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main';
import { AboutMe } from './components/about-me/about-me';
import { Portfolio } from './components/portfolio/portfolio';
import { Certification } from './components/certification/certification';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'about-me', component: AboutMe },
  { path: 'portfolio', component: Portfolio },
  { path: 'certification', component: Certification },
];
