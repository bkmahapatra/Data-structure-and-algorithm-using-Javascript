/**
 * Rabin karp Pattern search alogrithm
 *
 * Time: O((N-M+1)*M)
 */

let d = 256; //CHAR LEN

/* pat -> pattern 
    txt -> text 
    q -> A prime number 
*/
function rbSearch(txt, pat, q) {
  const n = txt.length,
    m = pat.length;

  // hash value for pattern & text
  let p = 0,
    t = 0,
    h = 1,
    i = 0,
    j = 0;

  // The value of h would be "pow(d, M-1)%q"
  for (i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate the hash value of pattern and first window of text
  for (i = 0; i < m; i++) {
    p = (p * d + pat.charCodeAt(i)) % q;
    t = (t * d + txt.charCodeAt(i)) % q;
  }

  // Slide the pattern over txt one by one
  for (i = 0; i <= n - m; i++) {
    if (p === t) {
      // Check for characters one by one
      for (j = 0; j < m; j++) {
        if (txt[i + j] !== pat[j]) break;
      }

      if (j === m) {
        console.log("found at: " + i);
      }
    }
    console.log({ p, t, c: txt[i] });

    if (i < n - m) {
      t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + m)) % q;

      if (t < 0) {
        t = t + q;
      }
    }
  }
}

// Driver code
// let txt = "abcdeabcef";
// let pat = "abc";
// let txt = "GEEKS FOR GEEK"; this will fail if we don't rectify   for (i = 0; i < n - m; i++)
let txt = "GEEKS FOR GEEKs";
let pat = "GEEK";
// A prime number
let q = 101;

rbSearch(txt, pat, q);
