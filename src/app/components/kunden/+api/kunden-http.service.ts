import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {KundenOverview} from "../+model/kunden.model";

@Injectable({
  providedIn: 'root'
})
export class KundenHttpService {

  kundenOverviews: KundenOverview[] = [
    {
      id: 1,
      firstName: 'Luna',
      lastName: 'Starlight',
    },
    {
      id: 2,
      firstName: 'Orion',
      lastName: 'Nebula',
    },
    {
      id: 3,
      firstName: 'Aurora',
      lastName: 'Borealis',
    },
    {
      id: 4,
      firstName: 'Leo',
      lastName: 'Constellation',
    },
    {
      id: 5,
      firstName: 'Vega',
      lastName: 'Lyra',
    }
  ];


  loadKundenOverviews(): Observable<KundenOverview[]> {
    return of(this.kundenOverviews).pipe(delay(1000));
  }
}
