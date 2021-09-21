/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const map = {};
    let j = 0;
    let maxLength = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        map[char] = (map[char] || 0) + 1;
        max = Math.max(map[char], max)

        while(max - i){

        }

        maxLength = Math.max(maxLength, max)
    }

    return maxLength;
}

characterReplacement("AAAHHIBC", 2);
// characterReplacement("ASSAD", 2);
// characterReplacement("AABABBA", 1);

