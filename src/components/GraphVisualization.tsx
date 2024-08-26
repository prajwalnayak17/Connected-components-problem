import React from 'react';
import { Graph } from 'react-d3-graph';

interface GraphVisualizationProps {
  nodes: number[];
  edges: [number, number][];
  forests: number[][];
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ nodes, edges, forests }) => {
  // Predefined set of colors for differentiating forests
  const colors = [
    '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff',
    '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'
  ];

  // Create a list of graph nodes with colors based on the forest group they belong to
  const graphNodes = nodes.map(node => {
    // Determine the forest index for the current node
    const forestIndex = forests.findIndex(forest => forest.includes(node));
    // Assign a color from the predefined list, cycling if necessary
    const color = colors[forestIndex % colors.length];

    return { id: node.toString(), color };
  });

  // Create a list of links (edges) between nodes
  const graphLinks = edges.map(([source, target]) => {
    return { source: source.toString(), target: target.toString() };
  });

  // Data object for the graph visualization library
  const data = {
    nodes: graphNodes,
    links: graphLinks,
  };

  // Configuration for the graph visualization, including node size and colors
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 600,  // Increase the size of nodes to make them more visible
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
  };

  return (
    <div>
      {/* Render the graph using the react-d3-graph library */}
      <Graph
        id="graph-id" // ID is required for the graph component
        data={data}
        config={myConfig}
      />
    </div>
  );
};

export default GraphVisualization;
