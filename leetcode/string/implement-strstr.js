// https://leetcode.com/problems/implement-strstr/

// TODO:
// https://algs4.cs.princeton.edu/53substring/RabinKarp.java.html
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let pointer = i;

            for (let j = 0; j < needle.length; j++) {

                if (haystack[pointer] === needle[j]) {
                    pointer++
                } else {
                    break;
                }
            }

            if (pointer - i === needle.length) {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr('hello', 'll'), 2);
console.log(strStr('foobar', 'foo'), 0);
console.log(strStr('foobar', 'foobar'), 0);
console.log(strStr('aaaaa', 'bba'), -1);
console.log(strStr('aaaaa', ''), 0);

hello, hella


BigO(f(x))
