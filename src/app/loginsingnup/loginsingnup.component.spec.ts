import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsingnupComponent } from './loginsingnup.component';

describe('LoginsingnupComponent', () => {
  let component: LoginsingnupComponent;
  let fixture: ComponentFixture<LoginsingnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsingnupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsingnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
