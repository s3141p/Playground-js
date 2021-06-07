function insertSort(arr) {
  let min;
  let index;

  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        index = j;
        min = arr[j];
      }
    }

    arr[index] = arr[i];
    arr[i] = min;
  }

  return arr;
}

n + n-1 + n-2 = 
(1 + n/2) * n

console.log(insertSort([5, 0, -2, 7, 3]));
