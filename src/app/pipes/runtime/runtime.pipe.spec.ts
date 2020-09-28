import { RuntimePipe } from './runtime.pipe';

describe('Pipe: RuntimePipe', () => {
  it('create an instance', () => {
    const pipe = new RuntimePipe();
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should display 0h00 when 0 given', () => {
      const pipe = new RuntimePipe();
      expect(pipe.transform(0)).toEqual('0h00');
    });

    it('should display 1h25 when 85 given', () => {
      const pipe = new RuntimePipe();
      expect(pipe.transform(85)).toEqual('1h25');
    });

    it('should display 0h05 when 5 given', () => {
      const pipe = new RuntimePipe();
      expect(pipe.transform(5)).toEqual('0h05');
    });
  });
});
