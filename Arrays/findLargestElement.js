/**
 * Time O(n)
 */

/**
 * @param{Array}
 * @returns{Number}
 */
function findLargestElement(arr) {
  let res = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[res]) res = i;
  }

  return res;
}

var array = [1, 32, 3, 24, 5];
console.log(array);
console.log(findLargestElement(array));
