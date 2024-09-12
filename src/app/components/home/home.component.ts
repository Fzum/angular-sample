import {Component} from '@angular/core';
import {UiLoadingSpinnerComponent} from "../shared/ui/ui-loading-spinner.component";
import {AsyncPipe} from "@angular/common";

@Component({
  standalone: true,
  imports: [
    UiLoadingSpinnerComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
