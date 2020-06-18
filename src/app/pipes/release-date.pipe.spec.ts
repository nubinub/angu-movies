import { ReleaseDatePipe } from './release-date.pipe';

describe('ReleaseDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ReleaseDatePipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return Jan 1, 1970 when 1970-01-01 given', () => {
      const pipe = new ReleaseDatePipe();
      expect(pipe.transform('1970-01-01')).toEqual('Jan 1, 1970');
    });
  });
});
