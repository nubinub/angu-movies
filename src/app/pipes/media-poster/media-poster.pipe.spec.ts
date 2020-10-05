import { MediaPosterPipe } from './media-poster.pipe';

describe('MediaPosterPipe', () => {
  it('create an instance', () => {
    const pipe = new MediaPosterPipe('test');
    expect(pipe).toBeTruthy();
  });
});
