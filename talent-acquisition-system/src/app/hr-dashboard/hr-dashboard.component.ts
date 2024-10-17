import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {
  hr: any;
  jobs = [
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software.', location: 'New York', salary: '$120k' },
    { id: 2, title: 'Product Manager', description: 'Manage product life cycles.', location: 'San Francisco', salary: '$150k' },
    { id: 3, title: 'Data Analyst', description: 'Analyze data for insights.', location: 'Remote', salary: '$90k' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.hr = JSON.parse(localStorage.getItem('hr') || '{}');
  }

  logout() {
    localStorage.removeItem('hr');
    this.router.navigate(['/signin']);
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter(job => job.id !== id);
  }
}
