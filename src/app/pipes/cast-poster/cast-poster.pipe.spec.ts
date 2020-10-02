import { CastPosterPipe } from './cast-poster.pipe';

describe('CastPosterPipe', () => {
  it('create an instance', () => {
    const pipe = new CastPosterPipe('test');
    expect(pipe).toBeTruthy();
  });
});
