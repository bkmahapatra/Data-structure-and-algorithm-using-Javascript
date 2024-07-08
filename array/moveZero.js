/**
 * Move all zeros to end of an array
 * time: O(n), aux space: O(1)
 *
 * swap tech
 */
function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      //   swap(arr[i], arr[count]);
      swap(arr, i, count);
      count++;
    }
  }
}

function swap(arr, low, high) {
  let temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
}

let test = [1, 2, 0, 0, 3, 5, 0, 6];
moveZeros(test);
console.log(test);
