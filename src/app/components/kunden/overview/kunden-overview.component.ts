import {Component} from '@angular/core';
import {UiLoadingSpinnerComponent} from "../../shared/ui/ui-loading-spinner.component";
import {AsyncPipe} from "@angular/common";
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
  // todo inject the stateful service to extract loading state and data

}
