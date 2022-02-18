const ceasarCipher = require('./ceasarcipher');

test('shift letters', () => {
  expect(ceasarCipher('Hello world!', 1)).toBe('ifmmp xpsme!');
});

test('shift letters', () => {
  expect(ceasarCipher('hello world!', 4)).toBe('lipps asvph!');
});

test('shift letters', () => {
  expect(ceasarCipher('zap,zap', 1)).toBe('abq,abq');
});
