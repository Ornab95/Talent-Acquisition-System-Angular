import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';

// import routes from './app/app.routes';
// import { SignupComponent } from './app/signup/signup.component';
// import { SigninComponent } from './app/signin/signin.component';
// import { HrDashboardComponent } from './app/hr-dashboard/hr-dashboard.component';
// import { UserDashboardComponent } from './app/user-dashboard/user-dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
