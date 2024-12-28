function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return true;
        }
    }
    return false;
}
//console.log(isPrime(11));

function evenOdd(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(evenOdd(99));