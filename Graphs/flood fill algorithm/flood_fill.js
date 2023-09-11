function floodFill(image, x, y, targetColor, replacementColor) {
  const rows = image.length;
  const cols = image[0].length;

  const stack = [[x, y]];

  while (stack.length) {
    const [row, col] = stack.pop();

    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < cols &&
      image[row][col] === targetColor
    ) {
      image[row][col] = replacementColor;
      stack.push([row + 1, col]);
      stack.push([row - 1, col]);
      stack.push([row, col + 1]);
      stack.push([row, col - 1]);
    }
  }
}

// Example usage:
const image = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
];

floodFill(image, 2, 2, 0, 2); // Fill the region starting from (2, 2) with color 2

for (const row of image) {
  console.log(row);
}
