import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaPosterPipe } from './media-poster.pipe';

describe('Pipe: MediaPosterPipe', () => {
  it('create an instance', () => {
    const pipe = new MediaPosterPipe('test');
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    let pipe;

    beforeEach(() => {
      pipe = new MediaPosterPipe('image/');
    });

    it('should return the media poster_path if movie given', () => {
      expect(pipe.transform(movies[0])).toEqual(`image/t/p/w500${movies[0].poster_path}`);
    });

    it('should return the media poster_path if tvShow given', () => {
      expect(pipe.transform(tvShows[0])).toEqual(`image/t/p/w500${tvShows[0].poster_path}`);
    });

    it('should return an empty string if no media given', () => {
      expect(pipe.transform()).toEqual('');
    });
  });
});
