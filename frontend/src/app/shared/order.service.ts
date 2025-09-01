import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/auth.service';

// Service to place orders and fetch order history
@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient, private auth: AuthService) {}

  placeOrder(items: any[], totalPrice: number) {
    return this.http.post(this.apiUrl, { items, totalPrice }, {
      headers: { Authorization: `Bearer ${this.auth.token}` }
    });
  }

  getOrders(userId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`, {
      headers: { Authorization: `Bearer ${this.auth.token}` }
    });
  }
}
