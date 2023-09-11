function leeAlgorithm(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1], // 4-connected neighborhood
  ];

  const queue = [[start[0], start[1], 0]]; // [x, y, distance]
  const visited = new Set([`${start[0]},${start[1]}`]);

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    if (x === end[0] && y === end[1]) {
      return distance;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        grid[nx][ny] === 0 &&
        !visited.has(`${nx},${ny}`)
      ) {
        queue.push([nx, ny, distance + 1]);
        visited.add(`${nx},${ny}`);
      }
    }
  }

  return -1; // No path found
}

// Example usage:
const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
];
const start = [0, 0];
const end = [4, 4];

const shortestDistance = leeAlgorithm(grid, start, end);
if (shortestDistance !== -1) {
  console.log(
    `Shortest distance from ${start} to ${end} is ${shortestDistance}`
  );
} else {
  console.log("No path found");
}
