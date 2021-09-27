const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetPosition = (text) => {
  const newText = text
    .toLowerCase()
    .replace(/[^a-zA-z]/g, "")
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
  return newText;
};

console.log(alphabetPosition("The sunset sets at twelve o' clock. "));
