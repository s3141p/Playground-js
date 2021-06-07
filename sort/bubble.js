function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > min) {
        index = j;
        min = arr[j];
      }
    }

    arr[index] = arr[i];
    arr[i] = min;
  }

  return arr;
}

console.log(bubleSort([5, 0, -2, 7, 3]));
