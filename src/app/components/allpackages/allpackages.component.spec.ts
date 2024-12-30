import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPackagesComponent } from './allpackages.component';



describe('AllpackagesComponent', () => {
  let component:AllPackagesComponent
  let fixture: ComponentFixture<AllPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
