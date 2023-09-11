from collections import deque

def lee_algorithm(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]  # 4-connected neighborhood

    queue = deque([(start[0], start[1], 0)])  # (x, y, distance)
    visited = set(start)

    while queue:
        x, y, distance = queue.popleft()

        if (x, y) == end:
            return distance

        for dx, dy in directions:
            nx, ny = x + dx, y + dy

            if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == 0 and (nx, ny) not in visited:
                queue.append((nx, ny, distance + 1))
                visited.add((nx, ny))

    return -1  # No path found

# Example usage:
grid = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
]
start = (0, 0)
end = (4, 4)

shortest_distance = lee_algorithm(grid, start, end)
if shortest_distance != -1:
    print(f"Shortest distance from {start} to {end} is {shortest_distance}")
else:
    print("No path found")
