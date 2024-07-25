/**
 * Sub array with given sum
 * time: O(n), aux space: O(1)
 */

function subArrSum(arr, sum) {
  let start = 0,
    curr = 0;

  for (let end = 0; end < arr.length; end++) {
    curr += arr[end];

    // While the currentSum is greater than the targetSum, move the start pointer to the right
    while (curr > sum && start <= end) {
      curr -= arr[start];
      start++;
    }

    if (curr === sum) {
      // return [start, end] // end = end
      return true;
    }
  }

  return false;
}

console.log(subArrSum([1, 2, 5, 8, 3, 9], 11)); //true
console.log(subArrSum([1, 2, 5, 8, 5, 3, 9], 10)); //false
