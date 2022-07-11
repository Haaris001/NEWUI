import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashboard1Component } from './new-dashboard1.component';

describe('NewDashboard1Component', () => {
  let component: NewDashboard1Component;
  let fixture: ComponentFixture<NewDashboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDashboard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
