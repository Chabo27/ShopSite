import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../shared/cart.service';
import { OrderService } from '../../shared/order.service';

// Checkout form collecting user info and confirming order
@Component({
  selector: 'app-checkout',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="p-4 max-w-md mx-auto">
      <h2 class="text-2xl mb-4">Checkout</h2>
      <input formControlName="name" placeholder="Name" class="border p-2 w-full mb-2" />
      <input formControlName="address" placeholder="Address" class="border p-2 w-full mb-2" />
      <input formControlName="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <button class="bg-green-700 text-white px-4 py-2" type="submit" [disabled]="form.invalid">Confirm</button>
    </form>
  `
})
export class CheckoutComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private cart: CartService,
    private orders: OrderService,
    private router: Router
  ) {}

  submit() {
    let itemsSnapshot: any[] = [];
    this.cart.items$.subscribe(i => (itemsSnapshot = i)).unsubscribe();
    const total = itemsSnapshot.reduce((s, it) => s + it.price * it.qty, 0);
    this.orders.placeOrder(itemsSnapshot, total).subscribe(() => {
      this.cart.clear();
      this.router.navigate(['/order-confirmation']);
    });
  }
}
