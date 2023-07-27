function kadaneAlgorithm(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = kadaneAlgorithm(arr);
console.log(result); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
