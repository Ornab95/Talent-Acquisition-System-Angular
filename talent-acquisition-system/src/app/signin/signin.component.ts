import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  role: string = 'user'; // Default role
  message: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const data = { email: this.email, password: this.password, role: this.role };

    fetch('http://localhost:8080/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const result = await response.json();
        if (response.ok) {
          this.message = 'Signin successful!';
          if (this.role === 'hr') {
            this.router.navigate(['/hr-dashboard']); // Redirect to HR dashboard
          } else {
            this.router.navigate(['/user-dashboard']); // Redirect to User dashboard
          }
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
