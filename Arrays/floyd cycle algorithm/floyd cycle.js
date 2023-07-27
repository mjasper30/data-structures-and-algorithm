//also known as the "Tortoise and Hare Algorithm,"

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function floydCycleDetection(head) {
  let tortoise = head;
  let hare = head;

  // Detect cycle (hare moves twice as fast as the tortoise)
  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      break;
    }
  }

  // No cycle found
  if (hare === null || hare.next === null) {
    return null;
  }

  // Find the start of the cycle
  tortoise = head;
  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;
  }

  return tortoise; // Returns the starting node of the cycle
}
