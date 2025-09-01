import { Component } from '@angular/core';

// Simple thank you page after order placement
@Component({
  selector: 'app-order-confirmation',
  template: `
    <div class="p-4 text-center">
      <h2 class="text-2xl mb-2">Thank you for your order!</h2>
      <p>Your WildernessHub gear is on the way.</p>
      <a routerLink="/shop" class="text-green-700 underline">Continue Shopping</a>
    </div>
  `
})
export class OrderConfirmationComponent {}
