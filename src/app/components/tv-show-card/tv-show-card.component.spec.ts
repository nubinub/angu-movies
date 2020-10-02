import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaPosterPipe } from 'src/app/pipes/media-poster/media-poster.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

import { TvShowCardComponent } from './tv-show-card.component';

describe('TvShowCardComponent', () => {
  let component: TvShowCardComponent;
  let fixture: ComponentFixture<TvShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TvShowCardComponent,
        RuntimePipe,
        ReleaseDatePipe,
        MediaPosterPipe,
      ],
      providers: [
        {provide: IMAGE_BASE_URL, useValue: 'image-api'}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
