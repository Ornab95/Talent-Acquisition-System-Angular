import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  // Define your configuration here
  public apiUrl = 'http://localhost:8080/api';
}
