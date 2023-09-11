function topologicalSort(graph) {
  const visited = new Set();
  const topoOrder = [];

  function dfs(node) {
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    topoOrder.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return topoOrder.reverse();
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: ["E"],
  E: [],
};

const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'C', 'B', 'D', 'E']
