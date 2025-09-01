import { Component } from '@angular/core';
import { ProductService } from '../../shared/product.service';

// Displays featured products on the home page
@Component({
  selector: 'app-home',
  template: `
    <div class="p-4">
      <h1 class="text-2xl mb-4">Featured Gear</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div *ngFor="let p of products" class="border p-4 bg-white">
          <a [routerLink]="['/product', p._id]" class="font-bold">{{ p.name }}</a>
          <p>{{ p.price | currency }}</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  products: any[] = [];
  constructor(private productsService: ProductService) {
    this.productsService.getProducts().subscribe(p => (this.products = p.slice(0,3)));
  }
}
