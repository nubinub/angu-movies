import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaDatePipe } from './media-date.pipe';

describe('Pipe: MediaDatePipe', () => {
  let pipe: MediaDatePipe;
  beforeEach(() => {
    pipe = new MediaDatePipe();
  });
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should reutrn first_air_date when given a tv_show', () => {
      expect(pipe.transform(tvShows[0])).toEqual(tvShows[0].first_air_date);
    });

    it('should reutrn release_date when given a movie', () => {
      expect(pipe.transform(movies[0])).toEqual(movies[0].release_date);
    });

    it('should reutrn an empty string when given undefined', () => {
      expect(pipe.transform(undefined)).toEqual('');
    });
  });
});
