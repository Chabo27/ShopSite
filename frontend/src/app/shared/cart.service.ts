import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem, clearCart } from '../store/actions/cart.actions';
import { CartItem } from './cart.service.models';

// Cart service wrapping NgRx store interactions
@Injectable({ providedIn: 'root' })
export class CartService {
  items$: Observable<CartItem[]> = this.store.select('cart');

  constructor(private store: Store<{ cart: CartItem[] }>) {}

  addItem(item: CartItem) {
    this.store.dispatch(addItem({ item }));
  }

  removeItem(productId: string) {
    this.store.dispatch(removeItem({ productId }));
  }

  clear() {
    this.store.dispatch(clearCart());
  }
}
