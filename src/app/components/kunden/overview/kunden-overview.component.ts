import {Component} from '@angular/core';
import {UiLoadingSpinnerComponent} from "../../shared/ui/ui-loading-spinner.component";
import {AsyncPipe} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    UiLoadingSpinnerComponent,
    AsyncPipe
  ],
  templateUrl: './kunden-overview.component.html',
  styleUrl: './kunden-overview.component.scss'
})
export class KundenOverviewComponent {
}
