function encode(str) {
  const res = [];

  str.split("").forEach((ch) => {
    res.push(...encodeChar(ch));
  });

  return res;
}

function encodeChar(char) {
  const code = char.codePointAt(0);
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

module.exports = {
  encode,
};
