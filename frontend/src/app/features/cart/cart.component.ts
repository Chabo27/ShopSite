import { Component } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { CartItem } from '../../shared/cart.service.models';

// Displays cart items and total price
@Component({
  selector: 'app-cart',
  template: `
    <div class="p-4" *ngIf="items.length; else empty">
      <h2 class="text-2xl mb-4">Your Cart</h2>
      <div *ngFor="let item of items" class="flex justify-between mb-2">
        <span>{{ item.name }} (x{{ item.qty }})</span>
        <span>{{ item.price * item.qty | currency }}</span>
        <button class="text-red-600" (click)="remove(item.productId)">Remove</button>
      </div>
      <p class="font-bold mt-4">Total: {{ total | currency }}</p>
      <a routerLink="/checkout" class="bg-green-700 text-white px-4 py-2 inline-block mt-4">Checkout</a>
    </div>
    <ng-template #empty>
      <p class="p-4">Your cart is empty.</p>
    </ng-template>
  `
})
export class CartComponent {
  items: CartItem[] = [];
  total = 0;
  constructor(private cart: CartService) {
    this.cart.items$.subscribe(i => {
      this.items = i;
      this.total = i.reduce((s, it) => s + it.price * it.qty, 0);
    });
  }

  remove(id: string) {
    this.cart.removeItem(id);
  }
}
