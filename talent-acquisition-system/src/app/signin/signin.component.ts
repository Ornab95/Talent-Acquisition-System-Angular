import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  role: string = 'user';
  message: string = '';

  constructor(private router: Router) {

  }

 onSubmit() {
  const data = { email: this.email, password: this.password };

  fetch('http://localhost:8080/api/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
  credentials: 'include', // Allow credentials (if cookies are needed)
})
  .then(async (response) => {
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error Data:', errorData);
      this.message = 'Signin failed: ' + errorData;
    } else {
      const result = await response.json();
      this.message = 'Signin successful!';

      if (result.role === 'hr') {
        this.router.navigate(['/hr-dashboard']);
        console.log('HR Dashboard');
      } else {
        this.router.navigate(['/user-dashboard']);
        console.log('User Dashboard');

      }
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    this.message = 'Signin failed. Please try again.';
  });

}
}
