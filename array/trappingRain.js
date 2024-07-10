/**
 * Trapping rain water
 * time: θ(n), aux space: θ(1)
 */
function trapWater(arr) {
  const n = arr.length;
  let lMax = [],
    rMax = [],
    res = 0;

  lMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(arr[i], lMax[i - 1]);
  }

  rMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(arr[i], rMax[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    res = res + (Math.min(lMax[i], rMax[i]) - arr[i]);
  }

  return res;
}

console.log(trapWater([5, 0, 6, 2, 3]));
