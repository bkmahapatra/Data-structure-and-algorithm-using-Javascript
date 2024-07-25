/**
 * If an element in an array of size n appears more than n/2 times.
 * time: O(n), aux space: O(1)
 */
function findMajority(arr) {
  const n = arr.length;
  let res = 0,
    count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      res = i;
      count = 1;
    }
  }

  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[res]) {
      count++;
    }
  }

  console.log({ count, res });

  if (count <= Math.floor(n / 2)) {
    return -1;
  }

  return res;
}
console.log(findMajority([3, 3, 4, 3, 4, 3, 3, 4]));
console.log(findMajority([3, 3, 4, 2, 4, 4, 4, 2, 4, 3]));
