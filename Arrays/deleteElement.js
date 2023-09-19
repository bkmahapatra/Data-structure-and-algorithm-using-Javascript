/*
  time : O(n)
*/

function deleteElement(arr, element) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      index = i;
      break;
    } else {
      throw new Error("Element not found");
    }
  }

  if (index !== -1) {
    for (let j = index; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }

    arr.length--;
  }
}

var array = [1, 2, 3, 4, 5];
console.log(array);
deleteElement(array, 3);
console.log(array);
