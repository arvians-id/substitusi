// Encryption
import alpha from "./Alphabet.js";
const encryption = (plainText, key) => {
  let result = "";
  for (let i = 0; i < plainText.length; i++) {
    if (plainText[i] == plainText[i].toUpperCase()) {
      for (let alph in alpha.uppercase) {
        if (plainText[i] == alpha.uppercase[alph]) {
          result += alpha.uppercase[(parseInt(alph) + key) % 26];
        }
      }
    } else {
      for (let alph in alpha.lowercase) {
        if (plainText[i] == alpha.lowercase[alph]) {
          result += alpha.lowercase[(parseInt(alph) + key) % 26];
        }
      }
    }
  }
  return result;
};

const decryption = (chiperText, key) => {
  let result = "";
  for (let i = 0; i < chiperText.length; i++) {
    if (chiperText[i] == chiperText[i].toUpperCase()) {
      for (let alph in alpha.uppercase) {
        if (chiperText[i] == alpha.uppercase[alph]) {
          result += alpha.uppercase[(parseInt(alph) + 26 - key) % 26];
        }
      }
    } else {
      for (let alph in alpha.lowercase) {
        if (chiperText[i] == alpha.lowercase[alph]) {
          result += alpha.lowercase[(parseInt(alph) + 26 - key) % 26];
        }
      }
    }
  }
  return result;
};

export { encryption, decryption };
