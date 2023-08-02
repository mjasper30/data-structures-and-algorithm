// Union-Find algorithm, also known as the Disjoint Set Union (DSU)
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
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
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}

// Example usage:
const n = 6;
const uf = new UnionFind(n);
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);
console.log(uf.find(2)); // Output: 0 (representative of the set containing element 2)
console.log(uf.find(4)); // Output: 3 (representative of the set containing element 4)
