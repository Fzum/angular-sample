import {inject, Injectable} from '@angular/core';
import {KundenOverview} from "../+model/kunden.model";
import {BehaviorSubject, map} from "rxjs";
import {KundenHttpService} from "../+api/kunden-http.service";

@Injectable({
  providedIn: 'root'
})
export class KundenStatefulService {
  readonly kundenOverviewState = new BehaviorSubject<KundenOverviewState>({loading: false, kunden: []});
  readonly isKundenOverviewsLoading$ = this.kundenOverviewState.pipe(map(state => state.loading));
  readonly kundenOverviews$ = this.kundenOverviewState.pipe(map(state => state.kunden));

  kundenHttpService = inject(KundenHttpService);

  loadKundenOverviews(): void {
    this.kundenOverviewState.next({loading: true, kunden: []});
    this.kundenHttpService.loadKundenOverviews().subscribe(kunden => {
      this.kundenOverviewState.next({loading: false, kunden});
    });
  }
}

interface KundenOverviewState {
  loading: boolean;
  kunden: KundenOverview[];
}
