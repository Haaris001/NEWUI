import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCoachingComponent } from './personal-coaching.component';

describe('PersonalCoachingComponent', () => {
  let component: PersonalCoachingComponent;
  let fixture: ComponentFixture<PersonalCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
