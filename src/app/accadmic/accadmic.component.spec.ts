import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccadmicComponent } from './accadmic.component';

describe('AccadmicComponent', () => {
  let component: AccadmicComponent;
  let fixture: ComponentFixture<AccadmicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccadmicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccadmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
