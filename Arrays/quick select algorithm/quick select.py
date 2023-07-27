def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quickselect(arr, low, high, k):
    if low <= high:
        pivotIndex = partition(arr, low, high)

        if pivotIndex == k - 1:
            return arr[pivotIndex]
        elif pivotIndex > k - 1:
            return quickselect(arr, low, pivotIndex - 1, k)
        else:
            return quickselect(arr, pivotIndex + 1, high, k)

# Function to find the kth smallest element
def find_kth_smallest(arr, k):
    if k < 1 or k > len(arr):
        return None
    return quickselect(arr, 0, len(arr) - 1, k)

# Example usage:
arr = [3, 1, 7, 4, 5, 9, 2, 8, 6]
k = 3
result = find_kth_smallest(arr, k)
print(f"The {k}th smallest element is: {result}")
