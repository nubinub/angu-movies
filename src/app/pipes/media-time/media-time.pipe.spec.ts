import { RuntimePipe } from '../runtime/runtime.pipe';
import { MediaTimePipe } from './media-time.pipe';

describe('MediaTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MediaTimePipe(new RuntimePipe());
    expect(pipe).toBeTruthy();
  });
});
