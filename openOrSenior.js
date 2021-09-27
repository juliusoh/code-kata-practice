// -2 to +26 handicap
// over age of 55 and > 7 === senior
// senior or open category
// map(item, index)
// map has return fuction
const openOrSenior = (data) => {
  return data.map(([age, handicap]) => {
    console.log("age", age);
    console.log("handicap", handicap);
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
};

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

const array = [1, 2];
const [one, two] = array;
console.log('one', one);
console.log('two', two);

const object = {
  "name": "tameem",
  "age": 35
}

const {name, age} = object;
console.log(name, age)
