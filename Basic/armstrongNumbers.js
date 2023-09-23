//armstrong numbers between two numbers
function armNums(n1, n2) {
  for (let num = n1; num <= n2; num++) {
    let sum = 0,
      temp = num,
      digits = num.toString().length;

    while (temp > 0) {
      let rem = temp % 10;
      sum += rem ** digits;
      temp = parseInt(temp / 10);
    }

    if (num == sum) console.log(num);
  }
}

armNums(1, 200);
