const exp_bits = 8;
const mantissa_bits = 23;
const non_sign_bits = exp_bits + mantissa_bits;

function encode(n) {
  const sign = Math.sign(n) === -1 ? 1 : 0;
  let exponent = Math.floor(Math.log2(Math.abs(n)));
  const lower = 2 ** exponent;
  const upper = 2 ** (exponent + 1);
  const percentage = (Math.abs(n) - lower) / (upper - lower);
  const mantissa = 2 ** 23 * percentage;
  exponent = exponent + 127;

  return (sign << non_sign_bits) | (exponent << mantissa_bits) | mantissa;
}

function decode(n) {
  const sign = (n & 0b10000000000000000000000000000000) >> non_sign_bits;
  const exponent = (n & 0b01111111100000000000000000000000) >> mantissa_bits;
  const mantissa = n & 0b00000000011111111111111111111111;
  percentage = mantissa / 2 ** 23;

  return (-1) ** sign * (1 + percentage) * 2 ** (exponent - 127);
}

console.log(decode(encode(-10.1))); // -10.09...
