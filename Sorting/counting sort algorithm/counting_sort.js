function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const countArray = Array(range).fill(0);

  // Count the occurrences of each element
  for (let num of arr) {
    countArray[num - min]++;
  }

  // Convert the counting array to a cumulative counting array
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  const outputArray = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    outputArray[countArray[num - min] - 1] = num;
    countArray[num - min]--;
  }

  return outputArray;
}

// Example usage
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log("Sorted array:", sortedArray);
