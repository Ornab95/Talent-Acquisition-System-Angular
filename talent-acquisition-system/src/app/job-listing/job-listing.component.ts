import { Component } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent {
  jobs = [
    { title: 'Software Engineer', description: 'Develop and maintain web applications.', location: 'New York' },
    { title: 'Data Scientist', description: 'Analyze data trends and provide insights.', location: 'San Francisco' }
  ];
}
