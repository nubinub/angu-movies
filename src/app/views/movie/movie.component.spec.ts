import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { of, Observable } from 'rxjs';
import movies from 'src/app/mock/movies-mock';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { MoviePosterComponent } from 'src/app/components/movie-poster/movie-poster.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MovieInfoComponent } from 'src/app/components/movie-info/movie-info.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MovieService', ['getMovie', 'getCast']);
    spy.getMovie.and.returnValue(of(movies[0]));
    spy.getCast.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [
        MovieComponent,
        MockComponent(MoviePosterComponent),
        MockComponent(MatGridList),
        MockComponent(MatGridTile),
        MockComponent(MovieInfoComponent)
      ],
      providers: [
        {provide: ActivatedRoute, useValue: {
          params: of({ id: movies[0].id })
        }},
        {provide: MovieService, useValue: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
