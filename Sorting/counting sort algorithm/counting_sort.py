def counting_sort(arr):
    max_value = max(arr)
    min_value = min(arr)
    range_of_elements = max_value - min_value + 1

    # Create a counting array to store the frequency of each element
    count_array = [0] * range_of_elements

    # Count the occurrences of each element
    for num in arr:
        count_array[num - min_value] += 1

    # Convert the counting array to a cumulative counting array
    for i in range(1, len(count_array)):
        count_array[i] += count_array[i - 1]

    # Create the output array
    output_array = [0] * len(arr)
    for num in reversed(arr):
        output_array[count_array[num - min_value] - 1] = num
        count_array[num - min_value] -= 1

    return output_array


# Example usage
array = [4, 2, 2, 8, 3, 3, 1]
sorted_array = counting_sort(array)
print("Sorted array:", sorted_array)
