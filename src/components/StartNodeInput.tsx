import React, { useState } from 'react';

interface StartNodeInputProps {
  onSetStartNode: (startNode: number) => void;
}

const StartNodeInput: React.FC<StartNodeInputProps> = ({ onSetStartNode }) => {
  const [startNode, setStartNode] = useState<number>(0);

  // Handler for setting the starting node
  const handleSubmit = () => {
    onSetStartNode(startNode);
  };

  return (
    <div>
      <label>Starting Node: </label>
      <input 
        type="number" 
        value={startNode} 
        onChange={(e) => setStartNode(parseInt(e.target.value))} 
      />
      <button onClick={handleSubmit}>Set Start Node</button>
    </div>
  );
};

export default StartNodeInput;
