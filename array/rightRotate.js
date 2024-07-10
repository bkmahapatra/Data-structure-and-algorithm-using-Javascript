/**
 * Right rotate
 * time: O(n), aux space: O(1)
 */

// Step 3: Reverse the entire array
// Step 1: Reverse the first k elements
// Step 2: Reverse the rest of the array
function rightRotateByK(arr, k) {
  const n = arr.length;
  k = k % n;

  if (n <= 1 || k === 0) {
    return;
  }

  reverseArr(arr, 0, n - 1);
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, n - 1);
}
function reverseArr(ar, start, end) {
  while (start <= end) {
    let temp = ar[start];
    ar[start] = ar[end];
    ar[end] = temp;

    start++;
    end--;
  }
}

let test = [1, 2, 3, 4, 5, 7]; // [4,5,1,2,3]
leftRotateByK(test, 2);
console.log(test);
