def linear_search(arr, target):
    for index, element in enumerate(arr):
        if element == target:
            return index
    return -1


# Example usage
array = [12, 3, 9, 4, 7, 5]
target = 7
index = linear_search(array, target)

if index != -1:
    print(f"Element {target} found at index {index}.")
else:
    print(f"Element {target} not found in the array.")
