import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { MediaTitlePipe } from 'src/app/pipes/media-title/media-title.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import movies from 'src/testing/data/movies-mock';

import { MediaCardComponent } from './media-card.component';

describe('MediaCardComponent', () => {
  let component: MediaCardComponent;
  let fixture: ComponentFixture<MediaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaCardComponent, MediaTitlePipe, ReleaseDatePipe, MediaDatePipe ],
      imports: [
        MatDialogModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCardComponent);
    component = fixture.componentInstance;
    component.media = movies[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
