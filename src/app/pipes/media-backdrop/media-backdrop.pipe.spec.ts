import { MediaBackdropPipe } from './media-backdrop.pipe';

describe('MediaBackdropPipe', () => {
  it('create an instance', () => {
    const pipe = new MediaBackdropPipe('test');
    expect(pipe).toBeTruthy();
  });
});
