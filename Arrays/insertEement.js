/*
 *insert at the end : O(1)
 *insert at the begining : O(n)
 */
function insertElement(arr, index, element) {
  if (index < 0) {
    throw new Error("Invalid index!");
  }

  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }

  arr[index] = element;
}

var array = [1, 2, 3, 4, 5];
console.log(array);
insertElement(array, 10, 99);
console.log(array);