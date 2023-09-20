/*The factorial of a number is the product of all the numbers from 1 to that number. For example,
factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.*/

function factorial(num) {
  if (num < 0) {
    return "enter positive number";
  } else if (num == 0) return 1;
  else if (num >= 1) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    return res;
  }
}

console.log(factorial(5));
