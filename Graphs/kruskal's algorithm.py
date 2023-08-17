class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return

        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        else:
            self.parent[root_y] = root_x
            if self.rank[root_x] == self.rank[root_y]:
                self.rank[root_x] += 1


def kruskalMST(graph):
    num_vertices = len(graph)
    disjoint_set = DisjointSet(num_vertices)
    mst = []

    sorted_edges = sorted(
        [(weight, u, v) for u, neighbors in enumerate(graph)
         for v, weight in neighbors],
        key=lambda x: x[0]
    )

    for weight, u, v in sorted_edges:
        if disjoint_set.find(u) != disjoint_set.find(v):
            mst.append((u, v, weight))
            disjoint_set.union(u, v)

    return mst


# Example usage
graph = [
    [(1, 4), (2, 2)],
    [(0, 4), (2, 3), (3, 2)],
    [(0, 2), (1, 3), (3, 5)],
    [(1, 2), (2, 5)]
]

mst = kruskalMST(graph)
for u, v, weight in mst:
    print(f"{u} - {v}: {weight}")
