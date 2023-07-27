//also known Boyer-Moore Majority Vote algorithm

function findMajorityElement(nums) {
  let candidate = null;
  let counter = 0;

  // First pass: Find a potential candidate
  for (const num of nums) {
    if (counter === 0) {
      candidate = num;
      counter = 1;
    } else if (num === candidate) {
      counter++;
    } else {
      counter--;
    }
  }

  // Second pass: Verify if the candidate is the majority element
  const countMajority = nums.filter((num) => num === candidate).length;

  if (countMajority > nums.length / 2) {
    return candidate;
  } else {
    return null;
  }
}

// Example usage:
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const result = findMajorityElement(arr);

if (result !== null) {
  console.log(`The majority element is ${result}.`);
} else {
  console.log("There is no majority element in the array.");
}
