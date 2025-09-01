import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

// Login form component
@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="form" (ngSubmit)="login()" class="p-4 max-w-sm mx-auto">
      <h2 class="text-2xl mb-4">Login</h2>
      <input formControlName="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <input formControlName="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
      <button class="bg-green-700 text-white px-4 py-2" type="submit" [disabled]="form.invalid">Login</button>
      <p class="mt-2">No account? <a routerLink="/register" class="text-green-700">Register</a></p>
    </form>
  `
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.form.value.email!, this.form.value.password!).subscribe(() => this.router.navigate(['/']));
  }
}
