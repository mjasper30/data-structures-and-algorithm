// One of the fastest sorting algorithm exist
function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;

  while (true) {
    while (left <= right && arr[left] <= pivot) {
      left++;
    }
    while (arr[right] >= pivot && right >= left) {
      right--;
    }
    if (right < left) {
      break;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  [arr[low], arr[right]] = [arr[right], arr[low]];
  return right;
}

// Example usage
let array = [12, 11, 13, 5, 6, 7];
quickSort(array, 0, array.length - 1);
console.log("Sorted array:", array);
