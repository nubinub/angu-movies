import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { MediaTimePipe } from 'src/app/pipes/media-time/media-time.pipe';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import movies from 'src/testing/data/movies-mock';

import { MediaInfoComponent } from './media-info.component';

describe('MediaInfoComponent', () => {
  let component: MediaInfoComponent;
  let fixture: ComponentFixture<MediaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaInfoComponent, MediaTitlePipe, ReleaseDatePipe, MediaDatePipe, MediaTitlePipe, MediaTimePipe, RuntimePipe],
      providers: [
        {provide: RuntimePipe}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaInfoComponent);
    component = fixture.componentInstance;
    component.media = movies[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
