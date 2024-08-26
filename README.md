# Graph Traversal and Visualization

This project is a web application that allows users to input a graph's nodes and edges, specify a starting node, and then visualize the graph and its traversal as forests. The application is built using React and TypeScript, and it leverages the `react-d3-graph` library for graph visualization.

## Additonal Note : When output is generated please avoid scroll and click over the graph as there is still a bug which i am working to fix it

## Features

- **Node and Edge Input:** Users can input nodes and edges to define the graph.
- **Starting Node Selection:** A starting node can be specified for the graph traversal.
- **Graph Visualization:** The graph is visualized with nodes and edges displayed, and different colors represent different forests (connected components).
- **Forest Display:** The forests (connected components) resulting from the graph traversal are listed below the visualization.


### Components

- **EdgeInput.tsx:** Allows users to input edges in the format `source-destination`.
- **GraphInput.tsx:** Combines all input components (NodeInput, EdgeInput, StartNodeInput) and handles form submission.
- **GraphVisualization.tsx:** Visualizes the graph using `react-d3-graph`, coloring nodes based on their forest.
- **NodeInput.tsx:** Allows users to input nodes as a comma-separated list.
- **StartNodeInput.tsx:** Allows users to select the starting node for graph traversal.

### Utility Functions

- **graphUtils.ts:**
  - `createGraph(nodes, edges)`: Constructs a graph (as an adjacency list) from the provided nodes and edges.
  - `traverseGraph(graph, startNode)`: Performs a depth-first search (DFS) to traverse the graph, identifying connected components (forests).

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/graph-traversal-visualization.git
   cd graph-traversal-visualization
2. Install dependencies:

   ```bash
   npm install
   npm start



### Explanation:

- **Project Overview:** A brief introduction to what the project does.
- **Features:** Lists the key functionalities of the application.
- **Project Structure:** A simple outline of the file structure, explaining the purpose of each component.
- **Getting Started:** Step-by-step instructions on how to set up the project locally.
- **Usage:** Basic instructions on how to use the application once it's running.
- **Customization:** Points out where and how users can tweak the graph's appearance or functionality.
- **Dependencies:** Lists the main libraries used in the project.
- **Contributing:** Encourages contributions and explains how to do so.
- **License and Acknowledgments:** Standard sections for legal information and credits.




  

   
