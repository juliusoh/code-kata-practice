const getCount = (str) => {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.toLowerCase().split("").forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  })
  return vowelsCount
};


console.log(getCount("abracadabra"));