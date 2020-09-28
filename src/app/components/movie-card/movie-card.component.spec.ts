import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import movies from 'src/testing/mock/movies-mock';
import { RuntimePipe } from 'src/app/pipes/runtime/runtime.pipe';
import { ReleaseDatePipe } from 'src/app/pipes/release-date/release-date.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MOVIE_API_BASE_URL } from 'src/app/services/movie-repository/movie-repository.service';
import { IMAGE_BASE_URL } from 'src/app/services/poster/poster.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MovieCardComponent,
        RuntimePipe,
        ReleaseDatePipe,
      ],
      providers: [
        {provide: MOVIE_API_BASE_URL, useValue: 'movie-api'},
        {provide: IMAGE_BASE_URL, useValue: 'image'}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an image with the given movie poster_path', () => {
    component.movie = movies[0];
    component.ngOnChanges();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; // 2
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain(movies[0].poster_path); // 3
  });

  it('should render a mat card title with the given movie original_title', () => {
    component.movie = movies[0];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; // 2
    const header = compiled.querySelector('mat-card-title');
    expect(header).toBeTruthy();
    expect(header.textContent).toBe(movies[0].original_title); // 3
  });

  it('should render a mat card content with the given movie release date formatted', () => {
    component.movie = movies[0];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement; // 2
    const content = compiled.querySelector('mat-card-content');
    expect(content).toBeTruthy();
    expect(content.textContent).toContain('Feb 12, 2020'); // 3
  });
});
