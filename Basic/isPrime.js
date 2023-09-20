//for loop
function isPrime(num){
    if(num<0) alert("Numbers should be positive")

    for(let i=2;i<num;i++){
        if(num%i==0) return false;
    }
    return true;
}

//while loop
function isPrime2(num){
    if(num<0) alert("Numbers should be positive")

    let divisor=2;

    while(num>divisor){
        if(num%divisor==0) return false;
        
        divisor++;
    }
    return true;
}

console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(8))
console.log(isPrime(4))