/**
 * Maximum appearing element in ranges
 *
 * left=[1,4,5,12] , right=[5,7,9,16]
 * Ranges= 1-5 , 4-7 , 5-9 , 12-16
 *
 * time: θ(n+Max), Aux space: θ(Max)
 */
function maxAppearance(leftArr, rightArr) {
  const MAX_RANGE = 101; //
  const n = leftArr.length;
  let freq = new Array(MAX_RANGE).fill(0);

  for (let i = 0; i < n; i++) {
    freq[leftArr[i]]++;
    freq[rightArr[i] + 1]--; // for handling this took 101 one extra
  }

  let res = 0;

  for (let i = 1; i < 100; i++) {
    freq[i] = freq[i - 1] + freq[i];

    if (freq[i] > freq[res]) {
      res = i;
    }
  }

  return res;
}

console.log(maxAppearance([1, 3, 12, 17], [7, 8, 25, 30]));
console.log(maxAppearance([1, 2, 4], [4, 5, 7]));
