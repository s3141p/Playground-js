const encode = require("./encode").encode;
const decode = require("./decode").decode;

describe("utf8", () => {
  const cases = [
    ["foobar", [0x66, 0x6f, 0x6f, 0x62, 0x61, 0x72]],
    [
      "Σὲ γνωρ",
      [
        0xce,
        0xa3,
        0xe1,
        0xbd,
        0xb2,
        0x20,
        0xce,
        0xb3,
        0xce,
        0xbd,
        0xcf,
        0x89,
        0xcf,
        0x81,
      ],
    ],
    [
      "🐶",
      [
        0xF0,
        0x9F,
        0x90,
        0xB6
      ]
    ],
    [
      "👩‍❤️‍👩",
      [
        0xf0,
        0x9f,
        0x91,
        0xa9,
        0xe2,
        0x80,
        0x8d,
        0xe2,
        0x9d,
        0xa4,
        0xef,
        0xb8,
        0x8f,
        0xe2,
        0x80,
        0x8d,
        0xf0,
        0x9f,
        0x91,
        0xa9,
      ],
    ],
  ];

  describe.each(cases)("encode(%s)", (str, val) => {
    it(`${str}`, () => {
      const encoded = encode(str.normalize());

      expect(encoded).toEqual(val);
      expect(decode(encoded)).toEqual(str);
    });
  });
});
