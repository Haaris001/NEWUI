import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLiveClassComponent } from './my-live-class.component';

describe('MyLiveClassComponent', () => {
  let component: MyLiveClassComponent;
  let fixture: ComponentFixture<MyLiveClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLiveClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLiveClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
