function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const toSwap = arr[i];

    for (let j = i; j > 0 && toSwap < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
      arr[j - 1] = toSwap;
    }
  }

  return arr;
}

console.log(insertionSort([5, 0, -2, 7, 3]));
