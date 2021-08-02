function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const toSwap = arr[i];
    let j = i - 1;

    for (; j >= 0 && arr[j] > toSwap; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = toSwap;
  }

  return arr;
}

console.log(insertionSort([5, 0, -2, 7, 3]));
