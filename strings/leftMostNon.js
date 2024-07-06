/**
 * Left most non repeating character in a string
 */

// simple 2 traversal
function leftMostNonRep1(str) {
  const charCount = new Array(256).fill(0);

  for (let i = 0; i < str.length; i++) {
    charCount[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str.charCodeAt(i)] === 1) {
      return i;
    }
  }

  return -1;
}

//
function leftMostNonRep2(str) {
  const fqIndexes = new Array(256).fill(-1);
  let res = Infinity;

  for (let i = 0; i < str.length; i++) {
    if (fqIndexes[str.charCodeAt(i)] === -1) {
      fqIndexes[str.charCodeAt(i)] = i;
    } else {
      fqIndexes[str.charCodeAt(i)] = -2;
    }
  }

  for (let i = 0; i < fqIndexes.length; i++) {
    if (fqIndexes[i] > 0) {
      res = Math.min(res, fqIndexes[i]);
    }
  }

  return res === Infinity ? -1 : res;
}
//
// function leftMostNonRep(str) {
//   const visited = new Array(256).fill(false);
//   let res = -1;

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (!visited[str.charCodeAt(i)]) {
//       res = i;
//       visited[str.charCodeAt(i)] = true;]
//     }
//   }

//   return res;
// }

console.log(leftMostNonRep1("geeksforgeeks"));
console.log(leftMostNonRep2("gezeksforgeeks"));
