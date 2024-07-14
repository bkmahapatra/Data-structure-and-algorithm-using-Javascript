/**
 * Maximum sub array
 * time: O(n), aux space: O(1)
 */
export function maxSubAr(arr) {
  let res = arr[0],
    maxEnd = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);

    res = Math.max(res, maxEnd);
  }

  return res;
}

console.log(maxSubAr([4, 2, -7, 8, -2, 3]));
console.log(maxSubAr([4, 2, -5, 8, -2, 9, -10, 7]));
