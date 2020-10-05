import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CastPosterPipe } from 'src/app/pipes/cast-poster/cast-poster.pipe';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from 'src/app/tokens/image-base-url.token';

import { CastCardComponent } from './cast-card.component';

describe('Component: CastCardComponent', () => {
  let component: CastCardComponent;
  let fixture: ComponentFixture<CastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastCardComponent, CastPosterPipe ],
      imports: [],
      providers: [
        { provide: MOVIE_API_BASE_URL, useValue: 'movie-api' },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
