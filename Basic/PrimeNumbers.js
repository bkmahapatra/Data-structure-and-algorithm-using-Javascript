//all prime numbers
function allPrimeNum(num) {
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  for (let j = 2; j < num; j++) {
    if (isPrime(j)) console.log(j);
  }
}
