import {Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'ui-loading-spinner',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="loading loading-ring loading-lg"></span>

  `,
})
export class UiLoadingSpinnerComponent {
}

