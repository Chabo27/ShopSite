import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgRx store setup
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './store/reducers/cart.reducer';
import { CartEffects } from './store/effects/cart.effects';

// Feature modules
import { HomeModule } from './features/home/home.module';
import { ShopModule } from './features/shop/shop.module';
import { ProductModule } from './features/product/product.module';
import { CartModule } from './features/cart/cart.module';
import { CheckoutModule } from './features/checkout/checkout.module';
import { OrderConfirmationModule } from './features/order-confirmation/order-confirmation.module';
import { AdminModule } from './features/admin/admin.module';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot([CartEffects]),
    HomeModule,
    ShopModule,
    ProductModule,
    CartModule,
    CheckoutModule,
    OrderConfirmationModule,
    AdminModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
