import { ReleaseDatePipe } from './release-date.pipe';

describe('Pipe: ReleaseDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ReleaseDatePipe();
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should return Jan 1, 1970 when 1970-01-01 given', () => {
      const pipe = new ReleaseDatePipe();
      expect(pipe.transform('1970-01-01')).toEqual('Jan 1, 1970');
    });

    it('should return Unknow date when no date given', () => {
      const pipe = new ReleaseDatePipe();
      expect(pipe.transform(undefined)).toEqual('Unknown date');
      expect(pipe.transform(null)).toEqual('Unknown date');
      expect(pipe.transform('')).toEqual('Unknown date');
    });

    it('should return Unknow date when wrong format given', () => {
      const pipe = new ReleaseDatePipe();
      expect(pipe.transform('1970-01-41')).toEqual('Unknown date');
    });
  });
});
