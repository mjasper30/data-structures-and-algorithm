function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage
let array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let target = 23;
let index = binarySearch(array, target);

if (index !== -1) {
  console.log(`Element ${target} found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}
