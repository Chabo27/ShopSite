import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/auth.service';

// Service to interact with product API endpoints
@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProduct(data: any) {
    return this.http.post(this.apiUrl, data, {
      headers: { Authorization: `Bearer ${this.auth.token}` }
    });
  }

  updateProduct(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data, {
      headers: { Authorization: `Bearer ${this.auth.token}` }
    });
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.auth.token}` }
    });
  }
}
