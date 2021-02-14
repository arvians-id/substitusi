import { encryption, decryption } from "./CaesarChiper.js";

// Encryption
const plain = document.querySelector("#encryption");
const keyEncrypt = document.querySelector("#keyEncrypt");
const resultChiper = document.querySelector("#show");
const eventPlain = () => {
  let valueKeyPlain = "";
  keyEncrypt.value == ""
    ? (valueKeyPlain = 3)
    : (valueKeyPlain = parseInt(keyEncrypt.value));
  resultChiper.innerHTML = encryption(plain.value, valueKeyPlain);
};
plain.addEventListener("keyup", eventPlain);
keyEncrypt.addEventListener("keyup", eventPlain);

// Decryption
const chiper = document.querySelector("#decryption");
const keyDecrypt = document.querySelector("#keyDecrypt");
const resultPlain = document.querySelector("#show1");
const eventChiper = () => {
  let valueKeyChiper = "";
  keyDecrypt.value == ""
    ? (valueKeyChiper = 3)
    : (valueKeyChiper = parseInt(keyDecrypt.value));
  resultPlain.innerHTML = decryption(chiper.value, valueKeyChiper);
};
chiper.addEventListener("keyup", eventChiper);
keyDecrypt.addEventListener("keyup", eventChiper);
