import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaVotePipe } from './media-vote.pipe';

describe('Pipe: MediaVotePipe', () => {
  it('create an instance', () => {
    const pipe = new MediaVotePipe();
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    let pipe: MediaVotePipe;

    beforeEach(() => {
      pipe = new MediaVotePipe();
    });

    it('should return the media rating divided by 2 and rounded to the first decimal digit', () => {
      const movie = {...movies[0]};
      movie.vote_average = 9.5;
      expect(pipe.transform(movie)).toEqual(4.8);
    });

    it('should return the media rating divided by 2', () => {
      const tvShow = {...tvShows[0]};
      tvShow.vote_average = 4.8;
      expect(pipe.transform(tvShow)).toEqual(2.4);
    });

    it('should return NaN when nom media given', () => {
      expect(pipe.transform(undefined)).toEqual(NaN);
    });
  });
});
