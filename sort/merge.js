
function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left == right) {
    return [arr[left]];
  }

  let mid = left + Math.floor((right - left) / 2);

  let a = mergeSort(arr, left, mid);
  let b = mergeSort(arr, mid + 1, right);

  return merge(a, b);
}

function merge(a, b) {
  const ln = a.length + b.length;
  const res = [];
  let aIndex = 0;
  let bIndex = 0;

  for (let i = 0; i < ln; i++) {

    if (aIndex == a.length) {
      res.push(b[bIndex++]);
      continue;
    }

    if (bIndex == b.length) {
      res.push(a[aIndex++]);
      continue;
    }

    if (a[aIndex] < b[bIndex]) {
      res.push(a[aIndex++]);
      continue;
    }

    if (a[aIndex] > b[bIndex]) {
      res.push(b[bIndex++]);
      continue;
    }
  }

  return res;
}

const arr = [4, 5, 0, 77, -2, 7, 3, 10];
const res = mergeSort(arr);

console.log(res);
