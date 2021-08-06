function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const swap = arr[i];

    while (j >= 0 && arr[j] > swap) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = swap;
  }

  return arr;
}

console.log(insertionSort([5, 0, -2, 7, 3]));
