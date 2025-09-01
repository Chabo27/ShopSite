import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearCart } from '../actions/cart.actions';
import { CartItem } from '../../shared/cart.service';

const stored = localStorage.getItem('ngrx-cart');
export const initialState: CartItem[] = stored ? JSON.parse(stored) : [];

// Simple reducer updating cart state
export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    const existing = state.find(i => i.productId === item.productId);
    if (existing) {
      return state.map(i =>
        i.productId === item.productId ? { ...i, qty: i.qty + item.qty } : i
      );
    }
    return [...state, item];
  }),
  on(removeItem, (state, { productId }) => state.filter(i => i.productId !== productId)),
  on(clearCart, () => [])
);
