def flood_fill(image, x, y, target_color, replacement_color):
    if image[x][y] != target_color:
        return

    rows, cols = len(image), len(image[0])
    stack = [(x, y)]

    while stack:
        x, y = stack.pop()

        if 0 <= x < rows and 0 <= y < cols and image[x][y] == target_color:
            image[x][y] = replacement_color
            stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

# Example usage:
image = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
]

flood_fill(image, 2, 2, 0, 2)  # Fill the region starting from (2, 2) with color 2

for row in image:
    print(row)
