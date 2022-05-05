import { vw } from './vw';

describe('vw', () => {
  it('should return 100vw', () => {
    expect.hasAssertions();
    expect(vw(375)).toBe('100vw');
  });
});
