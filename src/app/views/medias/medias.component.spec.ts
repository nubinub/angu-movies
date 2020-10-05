import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasComponent } from './medias.component';
import { of } from 'rxjs';
import movies from 'src/testing/data/movies-mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';
import { MediaDatePipe } from 'src/app/pipes/media-date/media-date.pipe';
import { casts } from 'src/testing/data/casts.mock';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';
import { MediaBackdropPipe } from 'src/app/pipes/media-backdrop/media-backdrop.pipe';

describe('MediasComponent', () => {
  let component: MediasComponent;
  let fixture: ComponentFixture<MediasComponent>;

  beforeEach(async(() => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getDefaultMovies', 'getMovie', 'getCast']);
    movieServiceSpy.getDefaultMovies.and.returnValue(of(movies));
    movieServiceSpy.getMovie.and.returnValue(of(movies[0]));
    movieServiceSpy.getCast.and.returnValue(of(casts));
    const tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['getDefaultTvShows']);
    tvShowServiceSpy.getDefaultTvShows.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ MediasComponent, MediaDatePipe, MediaBackdropPipe ],
      providers: [{
        provide: MovieService, useValue: movieServiceSpy
      }, {
        provide: TvShowService, useValue: tvShowServiceSpy
      }, {
        provide: IMAGE_BASE_URL, useValue: 'image'
      }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
