import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { addItem, removeItem, clearCart } from '../actions/cart.actions';
import { CartItem } from '../../shared/cart.service';

// Effect to persist cart state to localStorage
@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store: Store<{ cart: CartItem[] }>) {}

  persist$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addItem, removeItem, clearCart),
        withLatestFrom(this.store.select('cart')),
        tap(([action, cart]) => localStorage.setItem('ngrx-cart', JSON.stringify(cart)))
      ),
    { dispatch: false }
  );
}
