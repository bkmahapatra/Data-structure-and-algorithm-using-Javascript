/**
 * Remove duplicates from a sorted array
 *  time: O(n), aux space: O(1)
 */
function removeDuplicates(arr) {
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[count - 1]) {
      arr[count] = arr[i];
      count++;
    }
  }

  //   for trailing nums  [1,  2,  3,  5, 6, -1, -1, -1]
  //   for (let i = count; i < arr.length; i++) {
  //     arr[i] = -1;
  //   }
}
const ar = [1, 2, 2, 3, 3, 3, 5, 6];
removeDuplicates(ar);
console.log(ar);
