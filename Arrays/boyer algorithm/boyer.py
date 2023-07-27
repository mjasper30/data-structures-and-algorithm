//also known Boyer-Moore Majority Vote algorithm

def find_majority_element(nums):
    candidate = None
    counter = 0

    # First pass: Find a potential candidate
    for num in nums:
        if counter == 0:
            candidate = num
            counter = 1
        elif num == candidate:
            counter += 1
        else:
            counter -= 1

    # Second pass: Verify if the candidate is the majority element
    count_majority = sum(1 for num in nums if num == candidate)

    if count_majority > len(nums) // 2:
        return candidate
    else:
        return None

# Example usage:
arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
result = find_majority_element(arr)
if result is not None:
    print(f"The majority element is {result}.")
else:
    print("There is no majority element in the array.")
