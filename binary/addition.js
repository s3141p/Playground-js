function halfAdder(a, b) {
  const sum = a ^ b;
  const carry = a & b;

  return [sum, carry];
}

function fullAdder(a, b, carryIn) {
  [additionSum, additionCarry] = halfAdder(a, b);
  [resultSum, resultCarry] = halfAdder(additionSum, carryIn);

  return [resultSum, additionCarry | resultCarry];
}

function addBinary(a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    const left = a[i] || 0;
    const right = b[j] || 0;
    const [fsum, fcarry] = fullAdder(left, right, carry);
    sum = fsum + sum;
    carry = fcarry;
    i--;
    j--;
  }

  return carry ? carry + sum : sum;
}

console.log(addBinary("1110", "101") === "10011");
