# Union-Find algorithm, also known as the Disjoint Set Union (DSU) 

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return

        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

# Example usage:
n = 6
uf = UnionFind(n)
uf.union(0, 1)
uf.union(1, 2)
uf.union(3, 4)
print(uf.find(2))  # Output: 0 (representative of the set containing element 2)
print(uf.find(4))  # Output: 3 (representative of the set containing element 4)
