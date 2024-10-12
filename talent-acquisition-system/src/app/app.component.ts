import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, SigninComponent,UserDashboardComponent]
})
export class AppComponent {
  title = 'talent-acquisition-system';
}
