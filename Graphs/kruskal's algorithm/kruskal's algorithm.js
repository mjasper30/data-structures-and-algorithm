class DisjointSet {
  constructor(n) {
    this.parent = [...Array(n).keys()];
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      if (this.rank[rootX] === this.rank[rootY]) {
        this.rank[rootX]++;
      }
    }
  }
}

function kruskalMST(graph) {
  const numVertices = graph.length;
  const disjointSet = new DisjointSet(numVertices);
  const mst = [];

  const sortedEdges = []
    .concat(
      ...graph.map((neighbors, u) =>
        neighbors.map(([v, weight]) => [weight, u, v])
      )
    )
    .sort((a, b) => a[0] - b[0]);

  for (const [weight, u, v] of sortedEdges) {
    if (disjointSet.find(u) !== disjointSet.find(v)) {
      mst.push([u, v, weight]);
      disjointSet.union(u, v);
    }
  }

  return mst;
}

// Example usage
const graph = [
  [
    [1, 4],
    [2, 2],
  ],
  [
    [0, 4],
    [2, 3],
    [3, 2],
  ],
  [
    [0, 2],
    [1, 3],
    [3, 5],
  ],
  [
    [1, 2],
    [2, 5],
  ],
];

const mst = kruskalMST(graph);
for (const [u, v, weight] of mst) {
  console.log(`${u} - ${v}: ${weight}`);
}
