/**
 * remove duplicates from a sorted array
 */
function removeDuplicates(arr) {
  let res = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }

  //remove elements
  arr.length = res;

  return arr.length;
}

var ar = [10, 20, 20, 30, 30, 30];
removeDuplicates(ar);
console.log(ar);
