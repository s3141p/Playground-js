function heapsort(arr) {

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function heapify(i, lastIndex) {
        let largest = i;
        const right = i * 2 + 2;
        const left = i * 2 + 1;

        if (left < lastIndex && arr[left] > arr[largest]) {
            largest = left
        }

        if (right < lastIndex && arr[right] > arr[largest]) {
            largest = right
        }

        if (largest !== i) {
            swap(largest, i);
            heapify(largest, lastIndex);
        }
    }

    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(i, arr.length - 1);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        swap(0, i);
        heapify(0, i - 1);
    }

    return arr;
}

function generateArray(n) {
    const arr = [];
    const another = [];

    for (let i = 0; i < n; i++) {
        const num = Math.floor(Math.random() * 1_00);
        arr.push(num);
        another.push(num);
    }

    return { arr, another };
}

function compare(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

const { arr, another } = generateArray(10);

console.log(arr);

heapsort(arr);
another.sort((a, b) => a - b);

console.log(arr, another);

console.log(compare(arr, another));





