import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';
import movies from 'src/app/mock/movies-mock';
import { MovieService } from 'src/app/services/movie/movie.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MovieService', ['getDefaultMovies']);
    spy.getDefaultMovies.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [{
        provide: MovieService, useValue: spy
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
