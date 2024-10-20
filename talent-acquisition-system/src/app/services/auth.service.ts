import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This provides the service globally.
})
export class AuthService {
  private user: any; // Store user data (you can define a proper type)

  constructor() {}

  // Sign in method
  async signIn(email: string, password: string, role: string): Promise<void> {
    const url = 'http://localhost:8080/api/signin'; // Adjust the endpoint as needed
    const body = JSON.stringify({ email, password, role });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!response.ok) {
        throw new Error('Sign-in failed. Please check your credentials.');
      }

      const result = await response.json();
      this.user = result; // Store user data
      localStorage.setItem('user', JSON.stringify(this.user)); // Save user data in local storage
    } catch (error) {
      console.error('Error in AuthService:', error);
      throw error; // Re-throw the error for further handling
    }
  }

  // Logout method
  async logout(): Promise<void> {
    try {
      await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        credentials: 'include',
      });


      this.user = null;
      localStorage.removeItem('user');
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Optional: Get the current user
  getCurrentUser() {
    return this.user;
  }
}
