import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

// Registration form component
@Component({
  selector: 'app-register',
  template: `
    <form [formGroup]="form" (ngSubmit)="register()" class="p-4 max-w-sm mx-auto">
      <h2 class="text-2xl mb-4">Register</h2>
      <input formControlName="name" placeholder="Name" class="border p-2 w-full mb-2" />
      <input formControlName="email" placeholder="Email" class="border p-2 w-full mb-2" />
      <input formControlName="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
      <button class="bg-green-700 text-white px-4 py-2" type="submit" [disabled]="form.invalid">Register</button>
    </form>
  `
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.form.value).subscribe(() => this.router.navigate(['/']));
  }
}
