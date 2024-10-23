import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '<p>Logging out...</p>',
})
export class LogoutComponent {
  constructor(private router: Router) {
    this.logout();
  }

  logout() {
    // Clear the token from localStorage
    localStorage.removeItem('token');

    // Redirect to sign-in page
    this.router.navigate(['/signin']);
  }
}
