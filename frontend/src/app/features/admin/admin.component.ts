import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared/product.service';

// Admin panel for adding new products
@Component({
  selector: 'app-admin',
  template: `
    <div class="p-4">
      <h2 class="text-2xl mb-4">Admin Panel</h2>
      <form [formGroup]="form" (ngSubmit)="add()" class="grid gap-2 max-w-md">
        <input formControlName="name" placeholder="Name" class="border p-2" />
        <input formControlName="price" placeholder="Price" type="number" class="border p-2" />
        <input formControlName="category" placeholder="Category" class="border p-2" />
        <input formControlName="image" placeholder="Image URL" class="border p-2" />
        <textarea formControlName="description" placeholder="Description" class="border p-2"></textarea>
        <button class="bg-green-700 text-white px-4 py-2" type="submit" [disabled]="form.invalid">Add Product</button>
      </form>
    </div>
  `
})
export class AdminComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    image: [''],
    description: ['']
  });

  constructor(private fb: FormBuilder, private products: ProductService) {}

  add() {
    this.products
      .createProduct(this.form.value)
      .subscribe(() => this.form.reset());
  }
}
