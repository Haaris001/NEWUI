import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamplateComponent } from './pamplate.component';

describe('PamplateComponent', () => {
  let component: PamplateComponent;
  let fixture: ComponentFixture<PamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PamplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
