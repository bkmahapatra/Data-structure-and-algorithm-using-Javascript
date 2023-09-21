/*
 * To calculate frequency
 */
function frequency(arr) {
  let frequencies = {};
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count += 1;
    } else {
      frequencies[arr[i - 1]] = count;
      count = 1;
    }
  }
  //   for n-th element
  frequencies[arr[arr.length - 1]] = count;
}

const ar = [1, 1, 1, 3, 3, 4, 6, 6, 9, 33];
console.log(calculateFrequency(ar));
