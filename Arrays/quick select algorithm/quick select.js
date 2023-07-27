function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickselect(arr, low, high, k) {
  if (low <= high) {
    const pivotIndex = partition(arr, low, high);

    if (pivotIndex === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex > k - 1) {
      return quickselect(arr, low, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, high, k);
    }
  }
}

function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null;
  }
  return quickselect(arr, 0, arr.length - 1, k);
}

// Example usage:
const arr = [3, 1, 7, 4, 5, 9, 2, 8, 6];
const k = 3;
const result = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is: ${result}`);
