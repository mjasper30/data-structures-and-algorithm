def floyd_warshall(graph):
    n = len(graph)
    dist = [[float('inf')] * n for _ in range(n)]

    for i in range(n):
        dist[i][i] = 0

    for u in range(n):
        for v in range(n):
            dist[u][v] = graph[u][v]

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist


# Example usage:
graph = [
    [0, 3, float('inf'), 2],
    [float('inf'), 0, float('inf'), float('inf')],
    [float('inf'), 7, 0, 1],
    [6, float('inf'), float('inf'), 0]
]

result = floyd_warshall(graph)
for row in result:
    print(row)
