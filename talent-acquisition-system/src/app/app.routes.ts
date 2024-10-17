import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HrSignupComponent } from './hr-signup/hr-signup.component';
import { PostJobComponent } from './post-job/post-job.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/hr', component: HrSignupComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent },
  { path: 'post-job', component: PostJobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
