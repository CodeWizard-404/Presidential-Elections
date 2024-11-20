import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  onRegister(): void {
    if (this.name && this.email && this.password && this.confirmPassword) {
      // Simulate registration (replace with real registration logic)
      console.log('Registering user:', this.name, this.email);
      this.router.navigate(['/login']);  // Redirect to login page on successful registration
    }
  }
}
