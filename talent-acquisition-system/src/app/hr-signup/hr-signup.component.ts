import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hr-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hr-signup.component.html',
  styleUrls: ['./hr-signup.component.css'],
})
export class HrSignupComponent {
  hr: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',

  };
  message: string = '';

  constructor(private router: Router) {}

  async onSubmit() {
    if (this.hr.password !== this.hr.retypePassword) {
      this.message = 'Passwords do not match!';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/signup/hr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.hr),
      });

      if (response.ok) {
        this.message = 'HR Registration successful!';
        setTimeout(() => this.router.navigate(['/signin']), 2000);
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
