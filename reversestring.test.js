const reversestring = require('./reversestring');

test('reverse a string', () => {
  expect(reversestring('This is a string!')).toBe('!gnirts a si sihT');
});
