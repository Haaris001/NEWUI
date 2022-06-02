import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClassHeaderComponent } from './live-class-header.component';

describe('LiveClassHeaderComponent', () => {
  let component: LiveClassHeaderComponent;
  let fixture: ComponentFixture<LiveClassHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveClassHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveClassHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
