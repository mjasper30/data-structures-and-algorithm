from collections import defaultdict

def topological_sort(graph):
    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        topo_order.append(node)

    visited = set()
    topo_order = []

    for node in graph:
        if node not in visited:
            dfs(node)

    # The topological order is reversed because we append nodes in reverse order during DFS
    return topo_order[::-1]

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': []
}

result = topological_sort(graph)
print(result)  # Output: ['A', 'C', 'B', 'D', 'E']
