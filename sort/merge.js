function mergeSort(arr, left = 0, right = arr.length - 1) {
  console.log(left, right);
  if (left === right) {
    return;
  }

  const middle = Math.floor((left + right) / 2);
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);
}

function merge(arr, left, middle, right) {
  const copy = arr.slice(left, right + 1);

  let l = left;
  let r = middle + 1;

  for (let i = left; i <= right; i++) {
    if (l > middle) {
      arr[i] = copy[r];
      r++;
    } else if (r > right) {
      arr[i] = copy[l];
      l++;
    } else if (copy[l] > copy[r]) {
      arr[i] = copy[r];
      r++;
    } else {
      arr[i] = copy[l];
      l++;
    }
  }
}

const arr = [5, 0, -2, 7, 3, 10];
mergeSort(arr);
console.log(arr);
