import {Component, inject} from '@angular/core';
import {UiLoadingSpinnerComponent} from "../../shared/ui/ui-loading-spinner.component";
import {AsyncPipe} from "@angular/common";
import {KundenStatefulService} from "../+state/kunden-stateful.service";
import {map} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  imports: [
    UiLoadingSpinnerComponent,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './kunden-overview.component.html',
  styleUrl: './kunden-overview.component.scss'
})
export class KundenOverviewComponent {
  kundenStatefulService = inject(KundenStatefulService);

}
