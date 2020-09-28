import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { of, Observable } from 'rxjs';
import movies from 'src/testing/mock/movies-mock';
import { MovieService } from 'src/app/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { AppModule } from 'src/app/app.module';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MovieService', ['getMovie', 'getCast']);
    spy.getMovie.and.returnValue(of(movies[0]));
    spy.getCast.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      declarations: [
        MovieComponent,
      ],
      providers: [
        {provide: ActivatedRoute, useValue: {
          params: of({ id: movies[0].id })
        }},
        {provide: MovieService, useValue: spy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
