import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { MovieRepository } from '../movie-repository/movie-repository.service';
import movies from 'src/testing/data/movies-mock';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import EType from 'src/app/model/type/type-enum';
import { casts } from 'src/testing/data/casts.mock';

describe('Service: MovieService', () => {
  let service: MovieService;
  let movieRepositorySpy;
  let scheduler: TestScheduler;

  beforeEach(() => {
    movieRepositorySpy = jasmine.createSpyObj('MovieRepository', ['getPopular', 'search', 'getById', 'getMovieCredits']);
    movieRepositorySpy.getById.and.returnValue(of(movies[0]));
    movieRepositorySpy.search.and.returnValue(of(movies));
    movieRepositorySpy.getPopular.and.returnValue(of(movies));
    movieRepositorySpy.getMovieCredits.and.returnValue(of([]));
    TestBed.configureTestingModule({
      providers: [
        {provide: MovieRepository, useValue: movieRepositorySpy}
      ]
    });
    service = TestBed.inject(MovieService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('#searchMovies', () => {
    it('should call search from MovieRepository when searchParams provide a query value', () => {
      service.searchMovies({query: 'test'});
      expect(movieRepositorySpy.search).toHaveBeenCalled();
    });

    it('should map the results and enhance them with movie type when searchParams provide a query value', () => {
      scheduler.run(({expectObservable, cold}) => {
        movieRepositorySpy.search.and.returnValue(cold('a', {a: {results: [{}]}}));
        expectObservable(service.searchMovies({query: 'test'})).toBe('a', {a: [{type: EType.Movie}]});
      });
    });

    it('should call getDefaultTvShows when searchParams provided with no query value', () => {
      const spy = spyOn(service, 'getDefaultMovies');
      service.searchMovies({query: undefined});
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#getMovie', () => {
    it('should call getById with the given id', () => {
      service.getMovie(7);
      expect(movieRepositorySpy.getById).toHaveBeenCalledWith(7);
    });

    it('should enhance response return with movie type', () => {
      scheduler.run(({expectObservable, cold}) => {
        movieRepositorySpy.getById.and.returnValue(cold('a', {a: {}}));
        expectObservable(service.getMovie(7)).toBe('a', {a: {type: EType.Movie}});
      });
    });
  });

  describe('#getDefaultMovies', () => {
    it('should call getPopular from MovieRepository', () => {
      service.getDefaultMovies();
      expect(movieRepositorySpy.getPopular).toHaveBeenCalled();
    });

    it('should return only the movies with movie type values', () => {
      scheduler.run(({expectObservable, cold}) => {
        movieRepositorySpy.getPopular.and.returnValue(cold('a', {a: {results: [{}]}}));
        expectObservable(service.getDefaultMovies()).toBe('a', {a: [{type: EType.Movie}]});
      });
    });
  });

  describe('#getCast', () => {
    it('should call getMovieCredits from MovieRepository with the given id', () => {
      service.getCast(7);
      expect(movieRepositorySpy.getMovieCredits).toHaveBeenCalledWith(7);
    });

    it('should return only the cast', () => {
      scheduler.run(({expectObservable, cold}) => {
        movieRepositorySpy.getMovieCredits.and.returnValue(cold('a', {a: {cast: [casts[0]]}}));
        expectObservable(service.getCast(7)).toBe('a', {a: [casts[0]]});
      });
    });
  });
});
