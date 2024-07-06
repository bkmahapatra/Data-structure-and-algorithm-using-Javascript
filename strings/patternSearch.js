/**
 * Pattern search
 */

//naive  Time:O((n-m+1)*m), Aux space: O(1)
function patSearch1(str, pat) {
  let n = str.length,
    m = pat.length;

  for (let i = 0; i < n; i++) {
    let j = 0;

    for (j; j < m; j++) {
      if (pat[j] !== str[i + j]) {
        break;
      }
    }

    if (j === m) {
      console.log("match!" + i);
    }
  }
}

patSearch1("this is so beautiful", "asd");
patSearch1("this is so beautiful", "beauti");

// improved naive  Time: O(n), Aux space: O(1)
function patSearch2(str, pat) {
  let n = str.length,
    m = pat.length;

  for (let i = 0; i < n - m; ) {
    let j = 0;

    for (j; j < m; j++) {
      if (pat[j] !== str[i + j]) {
        break;
      }
    }

    if (j === m) {
      console.log("match! " + i);
    } else if (j === 0) {
      i++;
    } else {
      i += j;
    }
  }
}
