//all prime factors
function primeFactors(num) {
  let divisor = 2;

  while (num > 2) {
    if (num % divisor == 0) {
      console.log(divisor);
      num /= divisor;
    } else divisor++;
  }
}
