const { mod } = require('./index');

describe('index', () => {
  it('exports mod', () => {
    expect(mod).not.toBeUndefined();
  });
});
