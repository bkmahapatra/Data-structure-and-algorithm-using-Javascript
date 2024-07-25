/**
 * To calculate maximum sum of k consecutive elements in the array
 * time: O(n), aux space: O(1)
 */

function findMaxKSum(arr, k) {
  let cur_sum = 0;

  for (let i = 0; i < k; i++) {
    cur_sum += arr[i];
  }

  let max_sum = cur_sum;
  for (let i = k; i < arr.length; i++) {
    cur_sum = cur_sum + arr[i] - arr[i - k];
    max_sum = Math.max(max_sum, cur_sum);
  }

  return max_sum;
}

console.log(findMaxKSum([300, 100, 600, 200, 150, 90], 2)); // 800
console.log(findMaxKSum([300, 100, 600, 200, 150, 900], 2)); // 1050
