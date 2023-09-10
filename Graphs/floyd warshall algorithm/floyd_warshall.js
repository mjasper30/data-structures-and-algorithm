function floydWarshall(graph) {
  const n = graph.length;
  const dist = new Array(n).fill().map(() => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let u = 0; u < n; u++) {
    for (let v = 0; v < n; v++) {
      dist[u][v] = graph[u][v];
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Example usage:
const graph = [
  [0, 3, Infinity, 2],
  [Infinity, 0, Infinity, Infinity],
  [Infinity, 7, 0, 1],
  [6, Infinity, Infinity, 0],
];

const result = floydWarshall(graph);
for (const row of result) {
  console.log(row);
}
