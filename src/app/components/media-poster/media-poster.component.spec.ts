import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MediaService } from 'src/app/services/media/media.service';
import { IMAGE_BASE_URL, PosterService } from 'src/app/services/poster/poster.service';

import { MediaPosterComponent } from './media-poster.component';

describe('Component: MediaPosterComponent', () => {
  let component: MediaPosterComponent;
  let fixture: ComponentFixture<MediaPosterComponent>;

  beforeEach(async(() => {
    const mediaServiceSpy = jasmine.createSpyObj('MediaService', ['getTitle']);
    mediaServiceSpy.getTitle.and.returnValue('media-title');
    const posterServiceSpy = jasmine.createSpyObj('PosterService', ['getMediaPosterUrl']);
    posterServiceSpy.getMediaPosterUrl.and.returnValue('media-poster-url');
    TestBed.configureTestingModule({
      declarations: [ MediaPosterComponent ],
      imports: [AppModule],
      providers: [
        { provide: MediaService, useValue: mediaServiceSpy },
        { provide: PosterService, useValue: posterServiceSpy },
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

  describe('#ngOnChanges', () => {
    it('should set media poster url', () => {
      component.mediaPosterUrl = 'test';
      component.ngOnChanges();
      expect(component.mediaPosterUrl).toEqual('media-poster-url');
    });

    it('should set altMediaPoster' , () => {
      component.altMediaPoster = 'test';
      component.ngOnChanges();
      expect(component.altMediaPoster).toEqual('media-title');
    });
  });
});
