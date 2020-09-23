import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaService } from 'src/app/services/media/media.service';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';

import { MediaPosterComponent } from './media-poster.component';

describe('MediaPosterComponent', () => {
  let component: MediaPosterComponent;
  let fixture: ComponentFixture<MediaPosterComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MediaService', ['getMediaPosterUrl', 'getTitle']);
    TestBed.configureTestingModule({
      declarations: [ MediaPosterComponent ],
      providers: [
        { provide: MediaService, useValue: spy },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
