import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingComponent } from './job-listing.component';

describe('JobListingComponent', () => {
  let component: JobListingComponent;
  let fixture: ComponentFixture<JobListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
