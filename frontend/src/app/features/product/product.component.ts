import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';
import { CartItem } from '../../shared/cart.service.models';

// Shows product details and allows adding to cart
@Component({
  selector: 'app-product',
  template: `
    <div *ngIf="product" class="p-4">
      <h2 class="text-2xl mb-2">{{ product.name }}</h2>
      <img [src]="product.image" alt="" class="mb-4" />
      <p class="mb-2">{{ product.description }}</p>
      <p class="font-bold mb-4">{{ product.price | currency }}</p>
      <button class="bg-green-700 text-white px-4 py-2" (click)="addToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductComponent {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private cart: CartService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productsService.getProduct(id).subscribe(p => (this.product = p));
  }

  addToCart() {
    const item: CartItem = {
      productId: this.product._id,
      name: this.product.name,
      price: this.product.price,
      qty: 1
    };
    this.cart.addItem(item);
  }
}
