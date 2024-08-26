import React, { useState } from 'react';
import NodeInput from './NodeInput';
import EdgeInput from './EdgeInput';
import StartNodeInput from './StartNodeInput';
import '../styles.css';

interface GraphInputProps {
  onGraphDataSubmit: (nodes: number[], edges: [number, number][], startNode: number) => void;
}

const GraphInput: React.FC<GraphInputProps> = ({ onGraphDataSubmit }) => {
  const [nodes, setNodes] = useState<number[]>([]);
  const [edges, setEdges] = useState<[number, number][]>([]);
  const [startNode, setStartNode] = useState<number | null>(null);

  // Handler to add nodes
  const handleAddNodes = (newNodes: number[]) => {
    setNodes(newNodes);
  };

  // Handler to add edges
  const handleAddEdges = (newEdges: [number, number][]) => {
    setEdges(newEdges);
  };

  // Handler to set the starting node for traversal
  const handleSetStartNode = (node: number) => {
    setStartNode(node);
  };

  // Handler to submit the form and trigger the graph generation
  const handleSubmit = () => {
    if (startNode !== null) {
      onGraphDataSubmit(nodes, edges, startNode);
    }
  };

  return (
    <div>
      {/* Components for entering nodes, edges, and start node */}
      <NodeInput onAddNodes={handleAddNodes} />
      <EdgeInput onAddEdges={handleAddEdges} />
      <StartNodeInput onSetStartNode={handleSetStartNode} />
      {/* Button to generate the graph based on the inputs */}
      <button onClick={handleSubmit}>Generate Graph</button>
    </div>
  );
};

export default GraphInput;

