import { Component } from '@angular/core';
import {UiLoadingSpinnerComponent} from "../shared/ui/ui-loading-spinner.component";

@Component({
  standalone: true,
  imports: [
    UiLoadingSpinnerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
