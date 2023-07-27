def floyd_cycle_detection(head):
    tortoise = head
    hare = head

    # Detect cycle (hare moves twice as fast as the tortoise)
    while hare is not None and hare.next is not None:
        tortoise = tortoise.next
        hare = hare.next.next
        if tortoise == hare:
            break

    # No cycle found
    if hare is None or hare.next is None:
        return None

    # Find the start of the cycle
    tortoise = head
    while tortoise != hare:
        tortoise = tortoise.next
        hare = hare.next

    return tortoise  # Returns the starting node of the cycle
