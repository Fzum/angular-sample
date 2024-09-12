import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];
