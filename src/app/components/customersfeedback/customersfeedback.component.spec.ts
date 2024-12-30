import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersfeedbackComponent } from './customersfeedback.component';

describe('CustomersfeedbackComponent', () => {
  let component: CustomersfeedbackComponent;
  let fixture: ComponentFixture<CustomersfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
