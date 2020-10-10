const ALPHABET_LENGTH = 26;
const lmin = 'a'.charCodeAt();
const lmax = 'z'.charCodeAt();
const cmin = 'A'.charCodeAt();
const cmax = 'Z'.charCodeAt();

function encode(message, shift) {
  const result_arr = message.split('').map(letter => {
    if (letter >='a' && letter <= 'z')
      return String.fromCharCode(lmin + (letter.charCodeAt() - lmin + shift) % ALPHABET_LENGTH);
    else if (letter >='A' && letter <= 'Z')
      return String.fromCharCode(cmin + (letter.charCodeAt() - cmin + shift) % ALPHABET_LENGTH);
    else
      return letter;
  });
  return result_arr.join('');
}

function decode(message, shift) {
const result_arr = message.split('').map(letter => {
    if (letter >='a' && letter <= 'z')
      return String.fromCharCode(lmax - (lmax - letter.charCodeAt() + shift) % ALPHABET_LENGTH);
    else if (letter >='A' && letter <= 'Z')
      return String.fromCharCode(cmax - (cmax - letter.charCodeAt() + shift) % ALPHABET_LENGTH);
    else
      return letter;
  });
  return result_arr.join('');
}

module.exports = {
  encode,
  decode,
};

