function reversestring(string) {
  let newstring = '';
  for (let i = string.length - 1; i >= 0; i--) {
    const element = string[i];
    newstring += element;
  }
  return newstring;
}

module.exports = reversestring;
