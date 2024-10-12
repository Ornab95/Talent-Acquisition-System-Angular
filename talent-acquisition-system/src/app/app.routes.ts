import { Route } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const routes: Route[] = [
  { path: '', component: SigninComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
];
class AppComponent {
  title = 'talent-acquisition-system';
}
