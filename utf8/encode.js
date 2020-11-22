function encode(str) {
  const res = [];

  for (let i = 0; i < str.length; i++) {
    const [code, index] = pickCodePoint(str, i);
    i = index;
    res.push(...encodeChar(code));
  }

  return res;
}

function pickCodePoint(chars, index) {
  const code = chars[index].codePointAt();

  if (code < 0xd800 || code > 0xdfff) {
    return [code, index];
  }

  if (code >= 0xd800 && code <= 0xdbff) {
    if (!chars[index + 1]) {
      throw "The sequence in error";
    }

    const nextCode = chars[index + 1].codePointAt();
    const mask = 0b0000001111111111;
    const fullCode = ((code & mask) << 10) | ((nextCode & mask) + 0x10000);

    return [fullCode, index + 1];
  } else {
    throw "No valid character can be obtained";
  }
}

function encodeChar(code) {
  if (code < 0x80) {
    return [code];
  } else if (code < 0x800) {
    return [(0b110 << 5) | (code >>> 6), (0b10 << 6) | (code & 0b111111)];
  } else if (code < 0x10000) {
    return [
      (0b1110 << 4) | (code >>> 12),
      (0b10 << 6) | ((code >> 6) & 0b111111),
      (0b10 << 6) | (code & 0b111111),
    ];
  } else if (code < 0x110000) {
    return [
      (0b11110 << 3) | (code >>> 18),
      (0b10 << 6) | ((code >>> 12) & 0b111111),
      (0b10 << 6) | ((code >>> 6) & 0b111111),
      (0b10 << 6) | (code & 0b111111),
    ];
  }
}

console.log(pickCodePoint("\u{1f436}", 0))
console.log(encode('🐶'));

module.exports = {
  encode,
};
