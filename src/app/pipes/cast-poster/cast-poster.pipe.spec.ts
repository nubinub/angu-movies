import { casts } from 'src/testing/data/casts.mock';
import { CastPosterPipe } from './cast-poster.pipe';

describe('Pipe: CastPosterPipe', () => {

  it('create an instance', () => {
    const pipe = new CastPosterPipe('test');
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    let pipe;

    beforeEach(() => {
      pipe = new CastPosterPipe('image/');
    });

    it('should return the cast poster url if cast given', () => {
      expect(pipe.transform(casts[0])).toEqual(`image/t/p/w138_and_h175_face${casts[0].profile_path}`);
    });

    it('should return an empty string if no cast given', () => {
      expect(pipe.transform()).toEqual('');
    });
  });
});
