import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MediaService } from 'src/app/services/media/media.service';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';

import { MediaPosterComponent } from './media-poster.component';

describe('MediaPosterComponent', () => {
  let component: MediaPosterComponent;
  let fixture: ComponentFixture<MediaPosterComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MediaService', ['getMediaPosterUrl', 'getTitle']);
    TestBed.configureTestingModule({
      declarations: [ MediaPosterComponent ],
      imports: [AppModule],
      providers: [
        { provide: MediaService, useValue: spy },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
