import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found.component";
import {KundenOverviewComponent} from "./components/kunden/overview/kunden-overview.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/kunden',
    pathMatch: 'full'
  },
  {path: 'kunden', component: KundenOverviewComponent},
  {path: '**', component: PageNotFoundComponent}
];
