/**
 * Equilibrium Point
 *
 * The equilibrium point in an array is the position where the sum of
 * elements on the left is equal to the sum of elements on the right.
 *
 * time: O(n), aux space: O(1)
 */
function equiPoint(arr) {
  const n = arr.length;
  let rSum = 0;

  for (let i = 0; i < n; i++) {
    rSum += arr[i];
  }

  let lSum = 0;

  for (let i = 0; i < n; i++) {
    rSum -= arr[i];

    if (rSum === lSum) {
      return i;
    }

    lSum += arr[i];
  }

  return -1;
}

console.log(equiPoint([1, 2, 3, 4, 6]));
console.log(equiPoint([4, 2, -2]));
console.log(equiPoint([4, 2, 2]));
