import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MediaBackdropPipe } from 'src/app/pipes/media-backdrop/media-backdrop.pipe';
import { MediaService } from 'src/app/services/media/media.service';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';
import { casts } from 'src/testing/data/casts.mock';
import movies from 'src/testing/data/movies-mock';

import { MediaDetailsComponent } from './media-details.component';

describe('MediaDetailsComponent', () => {
  let component: MediaDetailsComponent;
  let fixture: ComponentFixture<MediaDetailsComponent>;

  beforeEach(async(() => {
    const mediaServiceSpy = jasmine.createSpyObj('MediaService', ['getMediaDetails']);
    mediaServiceSpy.getMediaDetails.and.returnValue(of([movies[0], casts]));
    TestBed.configureTestingModule({
      declarations: [ MediaDetailsComponent, MediaBackdropPipe ],
      providers: [{
        provide: MediaService, useValue: mediaServiceSpy,
      }, {
        provide: IMAGE_BASE_URL, useValue: 'image'
      }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
