function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted portion
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

// Example usage
let array = [64, 25, 12, 22, 11];
selectionSort(array);
console.log("Sorted array:", array);
