const sumTwoSmallest = (numbers) => {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1]
}

console.log(sumTwoSmallest([4, 3, 2, 1])); // 3
console.log(sumTwoSmallest([8, 7, 6, 5]));  // 11

// const [firstEl, secondEl] = numbers.sort((a, b) => a - b)
// return firstEl + secondEl