import React, { useState } from 'react';

interface NodeInputProps {
  onAddNodes: (nodes: number[]) => void;
}

const NodeInput: React.FC<NodeInputProps> = ({ onAddNodes }) => {
  const [nodes, setNodes] = useState<string>('');

  // Handler for processing and submitting the node input
  const handleSubmit = () => {
    // Convert the input string into an array of nodes
    const nodeArray = nodes.split(',').map(Number);
    // Pass the nodes to the parent component
    onAddNodes(nodeArray);
    setNodes(''); // Clear the input field after submission
  };

  return (
    <div>
      <label>Nodes (comma separated): </label>
      <input 
        type="text" 
        value={nodes} 
        onChange={(e) => setNodes(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Nodes</button>
    </div>
  );
};

export default NodeInput;
