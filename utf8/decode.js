function decode(bytes) {
  const result = [];
  const compMask = 0b00111111;

  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i];

    if (byte >>> 4 === 0b1111) {
      const fst = (byte & 0b00000111) << 18;
      const scd = (bytes[i + 1] & compMask) << 12;
      const trd = (bytes[i + 2] & compMask) << 6;
      const ft = bytes[i + 3] & compMask;
      result.push(fst | scd | trd | ft);

      i += 3;
    } else if (byte >>> 5 === 0b111) {
      const fst = (byte & 0b00001111) << 12;
      const scd = (bytes[i + 1] & compMask) << 6;
      const trd = bytes[i + 2] & compMask;
      result.push(fst | scd | trd);

      i += 2;
    } else if (byte >>> 6 === 0b11) {
      const fst = (byte & 0b00011111) << 6;
      const scd = bytes[i + 1] & compMask;
      result.push(fst | scd);

      i += 1;
    } else {
      result.push(byte);
    }
  }

  return String.fromCharCode(...result);
}

module.exports = {
  decode,
};
