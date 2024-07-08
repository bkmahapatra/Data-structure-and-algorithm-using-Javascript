/**
 * Left rotate an array
 *  time: O(n), aux space: O(1)
 */

function leftRotate(arr) {
  const temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = temp;
}

// let test = [1, 2, 3, 4, 5];
// leftRotate(test);
// console.log(test);

// left rotate  by d
function leftRotateByD(arr, d) {
  let temp = [];

  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = 0; i < temp.length; i++) {
    arr[arr.length - d + i] = temp[i];
  }
}

let test = [1, 2, 3, 4, 5];
leftRotateByD2(test, 4);
console.log(test);

// reverse
function leftRotateByD2(arr, d) {
  const n = arr.length;
  reverseArr(arr, 0, d - 1);
  reverseArr(arr, d, n - 1);
  reverseArr(arr, 0, n - 1);
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
