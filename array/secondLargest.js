/**
 * Time: θ(n), Aux space: θ(n)
 */
function largestNum(arr) {
  let res = -1,
    lar = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[lar]) {
      res = lar;
      lar = i;
    } else if (arr[i] !== arr[lar]) {
      if (res === -1 || arr[i] > arr[res]) {
        res = i;
      }
    }
  }

  return res;
}

// 40,30,25,29,10
// 23,12,13,21,50,9
console.log(largestNum([23, 12, 13, 21, 50, 9, 29]));
