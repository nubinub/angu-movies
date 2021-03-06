import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaVotePipe } from 'src/app/pipes/media-vote/media-vote.pipe';

import { MediaRatingComponent } from './media-rating.component';

describe('Component: MediaRatingComponent', () => {
  let component: MediaRatingComponent;
  let fixture: ComponentFixture<MediaRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaRatingComponent, MediaVotePipe ]
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
