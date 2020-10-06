import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { RuntimePipe } from '../runtime/runtime.pipe';
import { MediaTimePipe } from './media-time.pipe';

describe('Pipe: MediaTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MediaTimePipe(new RuntimePipe());
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    let pipe: MediaTimePipe;

    beforeEach(() => {
      pipe = new MediaTimePipe(new RuntimePipe());
    });

    it('should return the movie runtime formatted when given a movie', () => {
      const movie = {...movies[0]};
      movie.runtime = 120;
      expect(pipe.transform(movie)).toEqual('2h00');
    });

    it('should return the tvShow number of seasons and number of episodes when given a tvShow', () => {
      const tvShow = {...tvShows[0]};
      tvShow.number_of_episodes = 40;
      tvShow.number_of_seasons = 5;
      expect(pipe.transform(tvShow)).toEqual('5 seasons, 40 episodes');
    });

    it('should return an empty string if no media given', () => {
      expect(pipe.transform(undefined)).toEqual('');
    });
  });
});
