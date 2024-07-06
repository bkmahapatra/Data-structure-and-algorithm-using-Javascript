/**
 * Left most repeating char in a string
 *
 * Time: O(n) , Aux space: O(CHARLEN)
 *
 * Idea:
 * create a array of 256 (ascii char length) and fill with -1 which
 * will be used to store index of reapeating char
 * and then comparing it with previous repeating char index
 *
 */
function leftMostRep(str) {
  const fqIndexes = new Array(256).fill(-1);
  let res = Infinity;

  for (let i = 0; i < str.length; i++) {
    const charIndex = fqIndexes[str.charCodeAt(i)];

    if (charIndex === -1) {
      fqIndexes[str.charCodeAt(i)] = i;
    } else {
      res = Math.min(res, charIndex);
    }
  }

  return res === Infinity ? -1 : res;
}

/**
 * method 2
 * Time: O(n) , Aux space: O(CHARLEN)
 *
 * looping from and if visited then update the current index
 */
function leftMostRep2(str) {
  const visited = new Array(256).fill(false);
  let res = -1;

  for (let i = str.length - 1; i >= 0; i--) {
    if (visited[str.charCodeAt(i)]) {
      res = i;
    } else {
      visited[str.charCodeAt(i)] = true;
    }
  }

  return res;
}

console.log(leftMostRep2("geeksforgeeks"));
console.log(leftMostRep2("gesksforskesksls"));
