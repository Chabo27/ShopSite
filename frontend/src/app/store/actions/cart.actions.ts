import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../shared/cart.service';

// NgRx actions for cart management
export const addItem = createAction('[Cart] Add Item', props<{ item: CartItem }>());
export const removeItem = createAction('[Cart] Remove Item', props<{ productId: string }>());
export const clearCart = createAction('[Cart] Clear');
