/*The greatest common divisor (GCD) of two or more numbers is the greatest
common factor number that divides them, exactly. It is also called the
highest common factor (HCF). For example, the greatest common 
factor of 15 and 10 is 5, since both the numbers can be divided by 5.
15/5 = 3      10/5 = 2 */

//using for loop
function gcd(num1, num2) {
  let res;

  for (let i = 1; i <= num1, i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      res = i;
    }
  }
  return res;
}

//while loop
function gcd2(n1, n2) {
  let div = 1,
    res;
  while (div <= n1 && div <= n2) {
    if (n1 % div == 0 && n2 % div == 0) {
      res = div;
    }
    div++;
  }
  return res;
}

//subtracting
function gcd3(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}
console.log(gcd3(60, 72));
