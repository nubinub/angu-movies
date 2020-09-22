import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';

import { MoviePosterComponent } from './movie-poster.component';

describe('MoviePosterComponent', () => {
  let component: MoviePosterComponent;
  let fixture: ComponentFixture<MoviePosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePosterComponent ],
      providers: [
        { provide: MOVIE_API_BASE_URL, useValue: 'movie-api' },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
