import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

// Simple admin guard checking token payload for role (demo)
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.auth.token;
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role === 'admin') return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
