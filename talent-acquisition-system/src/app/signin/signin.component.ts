import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],  // No need for NgModule
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const data = { email: this.email, password: this.password };

    fetch('http://localhost:8080/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          this.message = 'Signin successful!';
          setTimeout(() => this.router.navigate(['/user-dashboard']), 2000);
        } else {
          this.message = 'Signin failed. Please check your credentials.';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        this.message = 'Signin failed. Please try again.';
      });
  }
}
