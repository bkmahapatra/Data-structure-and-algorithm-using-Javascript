/**
 * Time: log(n)
 */
function sqRoot(x) {
  if (x < 0) return -1;
  if (x === 0 || x === 1) return x;

  let low = 0,
    high = x,
    res = -1;

  while (low <= high) {
    let mid = (low + high) / 2;

    let midSqrt = mid * mid;

    if (Math.abs(midSqrt) === x) {
      return mid;
    } else if (midSqrt > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
      //   res = mid;
    }
  }

  return res;
}

console.log(sqRoot(4));
