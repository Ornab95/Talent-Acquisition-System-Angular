import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 user: any = {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    retypePassword: '',
    mobile: '',
  };
  message: string = '';

  constructor(private router: Router) {}

  async onSubmit() {
    if (this.user.password !== this.user.retypePassword) {
      this.message = 'Passwords do not match!';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.user),
      });

      if (response.ok) {
        this.message = 'Registration successful!';
        setTimeout(() => this.router.navigate(['/']), 2000); // Redirect to sign-in
      } else {
        const errorData = await response.json();
        this.message = `Registration failed: ${errorData.message || response.statusText}`;
      }
    } catch (error) {
      console.error('Error:', error);
      this.message = 'An error occurred. Please try again.';
    }
  }
}
