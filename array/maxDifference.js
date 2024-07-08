/**
 * Maximum difference problem with order
 * max value of ar[j]-ar[i] such that j>i
 *
 * Time: θ(n), Aux space: θ(1)
 */
function maxDiff(arr) {
  let res = arr[1] - arr[0],
    minVal = arr[0];

  for (let j = 1; j < arr.length; j++) {
    res = Math.max(res, arr[j] - minVal);
    minVal = Math.min(minVal, arr[j]);
  }

  return res;
}
let test = [7, 9, 5, 6, 3, 2]; // 2

console.log(maxDiff(test));
