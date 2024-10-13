import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routes from './app/app.routes';
import { AppComponent } from './app/app.component';
import { SignupComponent } from './app/signup/signup.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
