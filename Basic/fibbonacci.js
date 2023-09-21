//nth fibbonacci number
function fibbonacci(num) {
  if (num == 1 || num == 2) return num - 1;

  return fibbonacci(num - 1) + fibbonacci(num - 2);
}

//fibonacii series
function fibonacciSeries(num) {
  let n1 = 0,
    n2 = 1,
    nxtTerm;
  for (let i = 1; i <= num; i++) {
    console.log(n1);
    nxtTerm = n1 + n2;
    n1 = n2;
    n2 = nxtTerm;
  }
}

//output
console.log(fibbonacci(10));
fibonacciSeries(10);
