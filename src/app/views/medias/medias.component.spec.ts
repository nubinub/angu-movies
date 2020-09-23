import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasComponent } from './medias.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';
import movies from 'src/testing/mock/movies-mock';
import { MovieService } from 'src/app/services/movie/movie.service';

describe('MoviesComponent', () => {
  let component: MediasComponent;
  let fixture: ComponentFixture<MediasComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('MovieService', ['getDefaultMovies']);
    spy.getDefaultMovies.and.returnValue(of(movies));
    TestBed.configureTestingModule({
      declarations: [ MediasComponent ],
      providers: [{
        provide: MovieService, useValue: spy
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
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
