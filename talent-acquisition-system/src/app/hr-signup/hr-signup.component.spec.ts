import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSignupComponent } from './hr-signup.component';

describe('HrSignupComponent', () => {
  let component: HrSignupComponent;
  let fixture: ComponentFixture<HrSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
