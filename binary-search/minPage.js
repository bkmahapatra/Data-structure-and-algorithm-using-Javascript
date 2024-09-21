/**
 * Allocate min num of pages
 *
 * minimize the maximum  pages allocated, only contiguous pages can be allocated
 * or
 * Minimum possible value of maximum pages read by a student under the constaint that a student reads contingeous books
 *
 */
function minPages(arr, k) {
  let max = 0,
    sum = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    max = Math.max(max, arr[i]);
  }

  let low = max,
    high = sum,
    res = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (isPageFeasible(arr, k, mid)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
}

function isPageFeasible(arr, k, ans) {
  let count = 1,
    sum = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    if (sum + arr[i] > ans) {
      count++;
      sum = arr[i];
    } else {
      sum += arr[i];
    }
  }

  return count <= k;
}
