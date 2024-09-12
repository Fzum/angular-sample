import {Component, computed, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'ui-loading-spinner',
  standalone: true,
  imports: [NgClass],
  template: `
    <span [ngClass]="sizeStyleClass()" class="loading loading-infinity"></span>
  `,
})
export class UiLoadingSpinnerComponent {
  size = input.required<LoadingSpinnerSize>();

  sizeStyleClass = computed(() => ({
    'loading-xs': this.size() === 'xs',
    'loading-sm': this.size() === 'sm',
    'loading-md': this.size() === 'md',
    'loading-lg': this.size() === 'lg',
  }));
}

export type LoadingSpinnerSize = 'xs' | 'sm' | 'md' | 'lg';
