# One of the fastest sorting algorithm exist
def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index)
        quick_sort(arr, pivot_index + 1, high)


def partition(arr, low, high):
    pivot = arr[low]
    left = low + 1
    right = high

    done = False
    while not done:
        while left <= right and arr[left] <= pivot:
            left = left + 1
        while arr[right] >= pivot and right >= left:
            right = right - 1
        if right < left:
            done = True
        else:
            arr[left], arr[right] = arr[right], arr[left]

    arr[low], arr[right] = arr[right], arr[low]
    return right


# Example usage
array = [12, 11, 13, 5, 6, 7]
quick_sort(array, 0, len(array) - 1)
print("Sorted array:", array)
