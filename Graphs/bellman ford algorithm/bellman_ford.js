class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = [];
    }

    addEdge(u, v, w) {
        this.graph.push([u, v, w]);
    }

    bellmanFord(src) {
        const dist = Array(this.V).fill(Number.POSITIVE_INFINITY);
        dist[src] = 0;

        for (let i = 0; i < this.V - 1; i++) {
            for (const [u, v, w] of this.graph) {
                if (dist[u] != Number.POSITIVE_INFINITY && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }

        for (const [u, v, w] of this.graph) {
            if (dist[u] != Number.POSITIVE_INFINITY && dist[u] + w < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        for (let i = 0; i < this.V; i++) {
            console.log(`Vertex ${i} is at distance ${dist[i]}`);
        }
    }
}

const g = new Graph(5);
g.addEdge(0, 1, 4);
g.addEdge(0, 2, 3);
g.addEdge(1, 2, -2);
g.addEdge(1, 3, 2);
g.addEdge(3, 2, 5);
g.addEdge(2, 4, 1);
g.addEdge(4, 3, -3);

g.bellmanFord(0);
