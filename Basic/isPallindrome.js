// reversing a num is same  121, 12321, 12344321
function isPalindrome(num) {
  let temp = num,
    res = 0;

  if (num < 0) return false;

  while (temp != 0) {
    let rem = temp % 10;
    res = res * 10 + rem;
    temp = parseInt(temp / 10);
  }
  return num === res;
}

const n = 1234,
  n2 = 12321;
n3 = 12344321;
console.log(isPalindrome(n));
console.log(isPalindrome(n2));
console.log(isPalindrome(n3));
