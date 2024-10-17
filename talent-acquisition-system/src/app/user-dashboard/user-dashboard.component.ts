import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  name: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.name = navigation?.extras.state?.['name'] || 'User';
  }
}
