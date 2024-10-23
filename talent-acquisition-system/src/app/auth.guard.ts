import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; // import jwt-decode

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode and check if the token is expired
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        // Token expired, redirect to sign-in
        this.router.navigate(['/signin']);
        return false;
      }

      return true;
    } else {
      // No token, redirect to sign-in
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
