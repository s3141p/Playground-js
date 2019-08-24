// https://leetcode.com/problems/first-bad-version/

// /**
//  * Definition for isBadVersion()
//  *
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */
[f,f,f,f,t];
function isBadVersion(total, correct) {
    return function check(version) {
        if (version < correct) {
            return false
        } else {
            return true;
        }
    }
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let step = Math.round(n / 2);
        let lastValid = 0;
        let lastInvalid = n;
        let current = 0 + step;

        while (lastInvalid - lastValid !== 1) {
            const isBad = isBadVersion(current);

            if (isBad) {
                lastInvalid = current;
                step = Math.round((lastInvalid - lastValid) / 2);
                current = current - step;
            } else {
                lastValid = current;
                step = Math.round((lastInvalid - lastValid) / 2);
                current = current + step;
            }
        }
        return lastInvalid;
    };
};
let check = solution(isBadVersion(5, 4));
console.log(check(10));
