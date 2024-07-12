/**
 * Maximum consecutive ones
 * time: θ(n), Aux space: θ(1)
 */

function maxCon(arr) {
  let res = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      res = Math.max(res, count);
    }
  }

  return res;
}
