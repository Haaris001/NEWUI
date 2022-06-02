import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingLegendsComponent } from './building-legends.component';

describe('BuildingLegendsComponent', () => {
  let component: BuildingLegendsComponent;
  let fixture: ComponentFixture<BuildingLegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingLegendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
