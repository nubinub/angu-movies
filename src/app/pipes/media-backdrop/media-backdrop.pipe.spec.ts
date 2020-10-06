import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaBackdropPipe } from './media-backdrop.pipe';

describe('Pipe: MediaBackdropPipe', () => {
  it('create an instance', () => {
    const pipe = new MediaBackdropPipe('test');
    expect(pipe).toBeTruthy();
  });


  describe('#transform', () => {
    let pipe;

    beforeEach(() => {
      pipe = new MediaBackdropPipe('image/');
    });

    it('should return the media backdrop_path if movie given', () => {
      expect(pipe.transform(movies[0])).toEqual(`image/t/p/w500${movies[0].backdrop_path}`);
    });

    it('should return the media backdrop_path if tvShow given', () => {
      expect(pipe.transform(tvShows[0])).toEqual(`image/t/p/w500${tvShows[0].backdrop_path}`);
    });

    it('should return an empty string if no media given', () => {
      expect(pipe.transform()).toEqual('');
    });
  });
});
