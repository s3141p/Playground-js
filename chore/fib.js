function fib(n) {
    const result = [0, 1];
    let latest;

    if (n === 0 || n === 1) return result[n];

    for (let i = 2; i <= n; i++) {
        latest = result[0] + result[1];
        result[i % 2] = latest;
    }

    return latest;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

