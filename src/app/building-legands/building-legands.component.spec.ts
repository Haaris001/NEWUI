import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingLegandsComponent } from './building-legands.component';

describe('BuildingLegandsComponent', () => {
  let component: BuildingLegandsComponent;
  let fixture: ComponentFixture<BuildingLegandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingLegandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingLegandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
