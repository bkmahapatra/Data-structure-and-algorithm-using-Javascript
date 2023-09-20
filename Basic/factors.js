// factors of positive number
function factors(num) {
  if (num < 0) {
    console.log("enter positive number");
  } else {
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) console.log(i);
    }
  }
}

factors(5);
factors(-2);
