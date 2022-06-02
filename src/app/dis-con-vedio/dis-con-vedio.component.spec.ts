import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisConVedioComponent } from './dis-con-vedio.component';

describe('DisConVedioComponent', () => {
  let component: DisConVedioComponent;
  let fixture: ComponentFixture<DisConVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisConVedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisConVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
