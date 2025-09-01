import { Component } from '@angular/core';

// Root component with basic layout including navbar and router outlet
@Component({
  selector: 'app-root',
  template: `
    <nav class="bg-green-800 text-white p-4 flex justify-between">
      <a routerLink="/" class="font-bold">WildernessHub</a>
      <div>
        <a routerLink="/shop" class="mr-4">Shop</a>
        <a routerLink="/cart" class="mr-4">Cart</a>
        <a routerLink="/login" class="mr-4">Login</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
    <footer class="bg-gray-200 text-center p-4 mt-8">© 2024 WildernessHub</footer>
  `
})
export class AppComponent {}
