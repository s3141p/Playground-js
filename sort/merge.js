function mergeSort(arr, start = 0, end = arr.length - 1, tmpArr = []) {
  if (start >= end) {
    return;
  }

  const middle = start + Math.floor((end - start) / 2);

  mergeSort(arr, start, middle, tmpArr);
  mergeSort(arr, middle + 1, end, tmpArr);

  merge(arr, tmpArr, start, middle, end);
}

function merge(arr, tmp, start, middle, end) {
  for (let i = start; i <= end; i++) {
    tmp[i] = arr[i];
  }

  let leftCounter = start;
  let rightCounter = middle + 1;

  for (let i = start; i <= end; i++) {
    if (leftCounter > middle) {
      arr[i] = tmp[rightCounter];
      rightCounter++;
    }
    else if (rightCounter > end) {
      arr[i] = tmp[leftCounter];
      leftCounter++;
    } else if (tmp[leftCounter] < tmp[rightCounter]) {
      arr[i] = tmp[leftCounter];
      leftCounter++;
    } else {
      arr[i] = tmp[rightCounter];
      rightCounter++;
    }
  }
}

const arr = [5, 0, -2, 7, 3, 10];
mergeSort(arr);

console.log(arr);
