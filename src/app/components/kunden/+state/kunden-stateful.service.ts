import {Injectable} from '@angular/core';
import {KundenOverview} from "../+model/kunden.model";

@Injectable({
  providedIn: 'root'
})
export class KundenStatefulService {
  // todo 1) inject the http service to load kunden overviews
  // todo 2) add a behavior subject or signal for the state of the kunden overview (KundenOverviewState)

  loadKundenOverviews(): void {
    // todo call the http service to load kunden overviews
  }
}

interface KundenOverviewState {
  loading: boolean;
  kunden: KundenOverview[];
}
