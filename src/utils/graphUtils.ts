
interface Graph {
    [key: number]: number[];
}

// Function to create a graph from nodes and edges
export const createGraph = (nodes: number[], edges: [number, number][]) => {
    const graph: { [key: number]: number[] } = {};

    // Initialize graph with empty adjacency lists
    nodes.forEach(node => {
        graph[node] = [];
    });

    // Add edges to the graph
    edges.forEach(([source, target]) => {
        if (graph[source] && graph[target]) {
            graph[source].push(target);
            graph[target].push(source);
        }
    });

    return graph;
};

// Function to traverse the graph and identify connected components (forests)
export const traverseGraph = (graph: Graph, startNode: number): number[][] => {
    const visited = new Set<number>(); // Set to track visited nodes
    const forests: number[][] = []; // Array to store the different forests
    
    // Recursive DFS function to explore the graph
    const dfs = (node: number, currentForest: number[]) => {
      visited.add(node);
      currentForest.push(node);
      
      // Recursively visit each neighbor
      graph[node].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfs(neighbor, currentForest);
        }
      });
    };
  
    // Start DFS from each unvisited node to find all forests
    Object.keys(graph).forEach(key => {
      const node = parseInt(key);
      if (!visited.has(node)) {
        const currentForest: number[] = [];
        dfs(node, currentForest);
        forests.push(currentForest); // Add the discovered forest to the list
      }
    });
  
    return forests; // Return the list of forests
};
