import { Component } from '@angular/core';
import { ProductService } from '../../shared/product.service';

// Shop component with category filtering
@Component({
  selector: 'app-shop',
  template: `
    <div class="p-4">
      <h2 class="text-2xl mb-4">Shop</h2>
      <div class="mb-4">
        <label class="mr-2">Category:</label>
        <select [(ngModel)]="category" (change)="filter()" class="border p-1">
          <option value="">All</option>
          <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div *ngFor="let p of filtered" class="border p-4 bg-white">
          <a [routerLink]="['/product', p._id]" class="font-bold">{{ p.name }}</a>
          <p>{{ p.price | currency }}</p>
        </div>
      </div>
    </div>
  `
})
export class ShopComponent {
  products: any[] = [];
  filtered: any[] = [];
  categories: string[] = [];
  category = '';

  constructor(private productsService: ProductService) {
    this.productsService.getProducts().subscribe(p => {
      this.products = p;
      this.filtered = p;
      this.categories = [...new Set(p.map(x => x.category))];
    });
  }

  filter() {
    this.filtered = this.category ? this.products.filter(p => p.category === this.category) : this.products;
  }
}
