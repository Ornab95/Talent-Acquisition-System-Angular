import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
//import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component'; // Import your HR dashboard component
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  //{ path: 'hr-dashboard', component: HrDashboardComponent }, // HR dashboard route
  // ... other routes
];

export default routes;
