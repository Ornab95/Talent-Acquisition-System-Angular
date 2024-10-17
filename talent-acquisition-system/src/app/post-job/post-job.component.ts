import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JobService } from '../services/job.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';  // Import for error typing

@Component({
  selector: 'app-post-job',
  standalone: true,
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  imports: [RouterModule, FormsModule],
})
export class PostJobComponent {
  job = {
    title: '',
    description: '',
    location: '',
    salary: ''
  };

  constructor(private jobService: JobService, private router: Router) {}

  submitJob() {
    this.jobService.postJob(this.job).subscribe(
      (response: any) => {  // Use `any` or define a proper response type if known
        alert('Job posted successfully!');
        this.router.navigate(['/hr-dashboard']); // Navigate back to HR dashboard
      },
      (error: HttpErrorResponse) => {  // Proper error typing
        console.error('Error posting job:', error);
        alert('An error occurred while posting the job.');
      }
    );
  }
}
