import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponentComponent } from './photos-component.component';

describe('PhotosComponentComponent', () => {
  let component: PhotosComponentComponent;
  let fixture: ComponentFixture<PhotosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
