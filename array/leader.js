/**
 * Leaders in an array
 * - An element is called as leader if there is nothing
 * which is greater than this element on right of it.
 *
 * Time: θ(n), Aux space: θ(1)
 */
function leader(arr) {
  // can store index or value
  //   let res = arr.length - 1;

  //   console.log(arr[res]);
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     if (arr[i] > arr[res]) {
  //       console.log(arr[i]);
  //       res = i;
  //     }
  //   }
  let cr_lead = arr[arr.length - 1];

  console.log(cr_lead);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > cr_lead) {
      console.log(arr[i]);
      cr_lead = arr[i];
    }
  }
}
let test = [7, 10, 4, 3, 6, 5, 2]; // 10 6 5 2
leader(test);
