function ceasarCipher(string, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newalphabet = '';

  function shift(n) {
    for (let i = 0; i < alphabet.length; i++) {
      let offset = (i + n) % alphabet.length;
      newalphabet += alphabet[offset];
    }
  }

  function encode(string) {
    let result = '';
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      let index = alphabet.indexOf(string[i]);
      if (index === -1) {
        result += string[i];
      } else {
        result += newalphabet[index];
      }
    }
    return result;
  }
  shift(n);
  return encode(string);
}

module.exports = ceasarCipher;
