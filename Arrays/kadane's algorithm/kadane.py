def kadane_algorithm(arr):
    maxEndingHere = maxSoFar = arr[0]

    for num in arr[1:]:
        maxEndingHere = max(num, maxEndingHere + num)
        maxSoFar = max(maxSoFar, maxEndingHere)

    return maxSoFar
    
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
result = kadane_algorithm(arr)
print(result)  # Output: 6 (corresponding to the subarray [4, -1, 2, 1])
