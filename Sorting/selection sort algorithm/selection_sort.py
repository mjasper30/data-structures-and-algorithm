def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        # Find the minimum element in the unsorted portion
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap the minimum element with the first element of the unsorted portion
        arr[i], arr[min_index] = arr[min_index], arr[i]


# Example usage
array = [64, 25, 12, 22, 11]
selection_sort(array)
print("Sorted array:", array)
