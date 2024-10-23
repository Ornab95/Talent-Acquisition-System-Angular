import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Import your guard
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HrSignupComponent } from './hr-signup/hr-signup.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hr-signup', component: HrSignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [AuthGuard] },
  { path: 'job-listing', component: JobListingComponent, canActivate: [AuthGuard] },
  { path: 'post-job', component: PostJobComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/signin' }
];
