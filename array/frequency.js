/**
 * Frequencies in an sorted array
 *  time: O(n), aux space: O(1)
 */
function freqArr(arr) {
  const n = arr.length;
  let freq = 1,
    i = 1;

  while (i < n) {
    while (i < n && arr[i] === arr[i - 1]) {
      freq++;
      i++;
    }
    console.log(arr[i - 1] + " : " + freq);
    freq = 1;
    i++;
  }

  if (n === 1 || arr[n - 1] !== arr[n - 2]) {
    console.log(arr[n - 1] + " : " + 1);
  }
}

freqArr([1, 1, 3, 3, 3, 3, 3, 4, 5, 6, 6, 6]);
freqArr([1, 1, 3, 3, 3, 3, 3, 4, 5, 6, 6, 7]);

// unsorted array
