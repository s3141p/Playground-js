// https://leetcode.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._data = [];
    this.min = null;
    this.topVal = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.topVal = x;
    this.sameMin = 0;
    this._data.push(x);

    if (this.min === x) {
        this.sameMin++;
    } else {
        this.sameMin = 0;
        this.min = this.min && this.min < x ? this.min : x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const val = this._data.pop();

    if (this.min === val) {
        this.sameMin--;

        this.min = this.sameMin <= 0
            ? Math.min(...this._data)
            : this.min;

    } else {
        this.min = Math.min(...this._data)
        this.sameMin = 0;
    }

    if (this._data.length > 0) {
        this.top = this._data[this._data.length - 1];
    } else {
        this.top = null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.topVal;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const stack = new MinStack();

stack.push(10);
stack.push(9);
stack.push(7);

console.log(stack.getMin())
console.log(stack.pop())
console.log(stack.getMin())
