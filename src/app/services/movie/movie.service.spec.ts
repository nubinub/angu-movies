import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { MovieRepository } from '../movie-repository/movie-repository.service';
import movies from 'src/testing/mock/movies-mock';
import { of } from 'rxjs';

describe('Service: MovieService', () => {
  let service: MovieService;
  let movieRepositorySpy;

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
  });

  describe('#searchMovies', () => {
    it('should call search from MovieRepository when searchParams provide a query value', () => {
      service.searchMovies({query: 'test'});
      expect(movieRepositorySpy.search).toHaveBeenCalled();
    });

    it('should call getPopular from MovieRepository when searchParams provide a query value', () => {
      service.searchMovies({query: undefined});
      expect(movieRepositorySpy.getPopular).toHaveBeenCalled();
    });
  });

  describe('#getMovie', () => {
    it('should call getById with the given id', () => {
      service.getMovie(7);
      expect(movieRepositorySpy.getById).toHaveBeenCalledWith(7);
    });
  });

  describe('#getDefaultMovies', () => {
    it('should call getPopular from MovieRepository', () => {
      service.getDefaultMovies();
      expect(movieRepositorySpy.getPopular).toHaveBeenCalled();
    });
  });

  describe('#getCast', () => {
    it('should call getMovieCredits from MovieRepository with the given id', () => {
      service.getCast(7);
      expect(movieRepositorySpy.getMovieCredits).toHaveBeenCalledWith(7);
    });
  });
});
