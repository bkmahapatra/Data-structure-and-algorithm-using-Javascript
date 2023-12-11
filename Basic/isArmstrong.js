/* A positive integer is called an Armstrong number (of order n) if
abcd... = a^n + b^n + c^n + d^n + ... */
// armstrong numbers of n digit
function isArmstrong(num) {
  let temp = num,
    sum = 0,
    numOfDigit = num.toString().length;
  console.log(numOfDigit);

  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numOfDigit;
    temp = parseInt(temp / 10);
  }

  if (num == sum) {
    return `${num} is an Armstrong number`;
  } else {
    return `${num} is not an Armstrong number`;
  }
}
console.log(isArmstrong(153));
