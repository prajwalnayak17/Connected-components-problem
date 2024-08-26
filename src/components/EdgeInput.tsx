import React, { useState } from 'react';

interface EdgeInputProps {
  onAddEdges: (edges: [number, number][]) => void;
}

const EdgeInput: React.FC<EdgeInputProps> = ({ onAddEdges }) => {
  const [edges, setEdges] = useState<string>('');

  // Handler for processing and submitting the edge input
  const handleSubmit = () => {
    // Convert the input string into an array of edge pairs
    const edgeArray = edges.split(',').map(edge => {
      const [source, destination] = edge.split('-').map(Number);
      return [source, destination] as [number, number];
    });
    // Pass the edges to the parent component
    onAddEdges(edgeArray);
    setEdges(''); // Clear the input field after submission
  };

  return (
    <div>
      <label>Edges (comma separated, e.g., 1-2,2-3): </label>
      <input 
        type="text" 
        value={edges} 
        onChange={(e) => setEdges(e.target.value)} 
      />
      <button onClick={handleSubmit}>Add Edges</button>
    </div>
  );
};

export default EdgeInput;
