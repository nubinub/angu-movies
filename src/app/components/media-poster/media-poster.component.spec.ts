import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaPosterPipe } from 'src/app/pipes/media-poster/media-poster.pipe';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { MediaService } from 'src/app/services/media/media.service';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

import { MediaPosterComponent } from './media-poster.component';

describe('Component: MediaPosterComponent', () => {
  let component: MediaPosterComponent;
  let fixture: ComponentFixture<MediaPosterComponent>;

  beforeEach(async(() => {
    const mediaServiceSpy = jasmine.createSpyObj('MediaService', ['getTitle']);
    mediaServiceSpy.getTitle.and.returnValue('media-title');
    TestBed.configureTestingModule({
      declarations: [ MediaPosterComponent, MediaPosterPipe, MediaTitlePipe ],
      imports: [],
      providers: [
        { provide: MediaService, useValue: mediaServiceSpy },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPosterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
