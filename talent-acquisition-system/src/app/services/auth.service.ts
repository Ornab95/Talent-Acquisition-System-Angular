import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This provides the service globally.
})
export class AuthService {
  constructor() {}

  // Ensure the signIn method is defined properly
  async signIn(email: string, password: string, role: string): Promise<Response> {
    const url = 'http://localhost:8080/api/signin';
    const body = JSON.stringify({ email, password, role });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      return response;
    } catch (error) {
      console.error('Error in AuthService:', error);
      throw error;
    }
  }
}
