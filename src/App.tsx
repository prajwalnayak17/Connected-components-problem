import React, { useState } from 'react';
import GraphInput from './components/GraphInput';
import GraphVisualization from './components/GraphVisualization';
import { createGraph, traverseGraph } from './utils/graphUtils';
import './styles.css';

const App: React.FC = () => {
  // State for storing nodes, edges, and the resulting forest structures
  const [nodes, setNodes] = useState<number[]>([]);
  const [edges, setEdges] = useState<[number, number][]>([]);
  const [forests, setForests] = useState<number[][]>([]);

  // Handler function that processes the input data and updates the state
  const handleGraphDataSubmit = (newNodes: number[], newEdges: [number, number][], startNode: number) => {
    setNodes(newNodes); // Update the nodes
    setEdges(newEdges); // Update the edges

    // If no nodes are provided, clear the forests and return early
    if (newNodes.length === 0) {
      setForests([]);
      return;
    }

    // Create the graph structure from nodes and edges
    const graph = createGraph(newNodes, newEdges);
    // Perform graph traversal starting from the given node to find forests
    const resultForests = traverseGraph(graph, startNode);
    setForests(resultForests); // Update the forests with the traversal result
  };

  return (
    <div>
      <h1>Graph Traversal and Visualization</h1>
      {/* Component for inputting nodes, edges, and starting node */}
      <GraphInput onGraphDataSubmit={handleGraphDataSubmit} />
      {/* Visualization of the graph based on the provided nodes, edges, and forests */}
      <GraphVisualization nodes={nodes} edges={edges} forests={forests} />
      <div>
        <h2>Forests:</h2>
        {/* Display the list of forests generated from the traversal */}
        {forests.map((forest, index) => (
          <div key={index}>Forest {index + 1}: {forest.join(', ')}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
