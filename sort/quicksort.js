function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left > right) {
        return;
    }

    const pivot = hoarPivot(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
}

function hoarPivot(arr, left, right) {
    let i = left + 1;
    let j = right;
    let pivot = arr[left];

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

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const arr1 = [0, 5, -2, 7, 3,];
quickSort(arr1);

console.log(arr1);


