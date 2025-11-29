import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold">Home</h1>
      <p class="mt-4">Welcome to the portfolio!</p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
