import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaRatingComponent } from './media-rating.component';

describe('MediaRatingComponent', () => {
  let component: MediaRatingComponent;
  let fixture: ComponentFixture<MediaRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
