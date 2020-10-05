import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MediaTitlePipe } from './media-title.pipe';

describe('Pipe: MediaTitlePipe', () => {
  let pipe: MediaTitlePipe;

  beforeEach(() => {
    pipe =  new MediaTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should return original name when given a tv show', () => {
      expect(pipe.transform(tvShows[0])).toEqual(tvShows[0].original_name);
    });

    it('should return original title when given a movie', () => {
      expect(pipe.transform(movies[0])).toEqual(movies[0].original_title);
    });
  });
});
