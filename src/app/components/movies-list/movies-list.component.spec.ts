import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { MockComponent } from 'ng-mocks';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import movies from 'src/app/mock/movies-mock';
import { By } from '@angular/platform-browser';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListComponent, MockComponent(MovieCardComponent) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render n movie-card', () => {
    component.movies = movies;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('movie-card'));
    expect(cards.length).toEqual(movies.length);
  });
});
