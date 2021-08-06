function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivot = hoarPartition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);

}

function hoarPartition(arr, left, right) {
    let pivot = arr[left];
    let i = left + 1;
    let j = right;

    while (true) {
        for (; i < right && arr[i] < pivot;) {
            i++;
        }

        for (; arr[j] > pivot;) {
            j--;
        }

        if (i >= j) {
            break;
        }

        swap(arr, i++, j--);
    }

    swap(arr, left, j);

    return j;
}

function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

const arr1 = [0, 5, -2, 0, 0, 7, 3,];
const arr2 = [5, 0];
const arr3 = [0, 5];
// quickSort(arr1);
// quickSort(arr2);
quickSort(arr3);

// console.log(arr1);
// console.log(arr2);
console.log(arr3);


