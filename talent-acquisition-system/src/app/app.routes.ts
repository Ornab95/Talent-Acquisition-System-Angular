import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Import your guard
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HrSignupComponent } from './hr-signup/hr-signup.component';
import { JobListingComponent } from './job-listing/job-listing.component';

export const routes: Routes = [ // <--- Add export keyword here
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'hr-signup', component: HrSignupComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [AuthGuard] },
  { path: 'job-listing', component: JobListingComponent, canActivate: [AuthGuard] },
  { path: 'post-job', component: PostJobComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/signin' } // Wildcard route for a 404 page
];
