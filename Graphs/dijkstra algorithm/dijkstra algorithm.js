class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => a[1] - b[1]);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(graph, source) {
  const distances = {};
  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue([source, 0]);

  while (!priorityQueue.isEmpty()) {
    const [currentVertex, currentDistance] = priorityQueue.dequeue();

    if (currentDistance > distances[currentVertex]) {
      continue;
    }

    for (const [neighbor, weight] of graph[currentVertex]) {
      const distance = currentDistance + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        priorityQueue.enqueue([neighbor, distance]);
      }
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: [
    ["B", 4],
    ["C", 2],
  ],
  B: [
    ["A", 4],
    ["C", 5],
    ["D", 10],
  ],
  C: [
    ["A", 2],
    ["B", 5],
    ["D", 3],
  ],
  D: [
    ["B", 10],
    ["C", 3],
  ],
};

const source = "A";
const shortestDistances = dijkstra(graph, source);
console.log(shortestDistances);
