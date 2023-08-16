function linearSearch(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
}

// Example usage
let array = [12, 3, 9, 4, 7, 5];
let target = 7;
let index = linearSearch(array, target);

if (index !== -1) {
  console.log(`Element ${target} found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}
