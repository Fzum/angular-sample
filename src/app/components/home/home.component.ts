import {Component, inject} from '@angular/core';
import {UiLoadingSpinnerComponent} from "../shared/ui/ui-loading-spinner.component";
import {AuthService} from "../shared/util/auth.service";
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
  authService = inject(AuthService)
}
