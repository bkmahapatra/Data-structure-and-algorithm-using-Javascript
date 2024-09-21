/**
 * Find repeating element
 * There should be 1 <= max(arr) < n-1
 * 
 * time: O(n), aux space: O(1)
 */
function findRepeat(arr) {
  let slow = arr[0] + 1,
    fast = arr[0] + 1;

  do {
    slow = arr[slow] + 1;
    fast = arr[arr[fast] + 1] + 1;
  } while (slow !== fast);

  slow = arr[0] + 1;

  while (slow !== fast) {
    slow = arr[slow] + 1;
    fast = arr[fast] + 1;
  }

  return slow - 1;
}

console.log(findRepeat([2, 1, 3, 1, 0]));

function findRepeatNonZero(arr) {
  let slow = arr[0],
    fast = arr[0];

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  slow = arr[0];

  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
}

console.log(findRepeatNonZero([2, 1, 3, 1]));
