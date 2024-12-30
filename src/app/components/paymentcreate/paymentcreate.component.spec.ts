import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcreateComponent } from './paymentcreate.component';

describe('PaymentcreateComponent', () => {
  let component: PaymentcreateComponent;
  let fixture: ComponentFixture<PaymentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
