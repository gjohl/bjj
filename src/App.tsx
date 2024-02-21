// import { useMemo, useState, useCallback } from 'react'
import './App.css'
import { ForceGraph2D } from 'react-force-graph';


const App = () => {
  const mockData = {
    nodes: [
        {id: "id1", "val": 1 }, 
        {id: "id2", "val": 2 }, 
        {id: "id3", "val": 3 }
    ],
    links: [
        {source: "id1", target: "id3"},
        {source: "id1", target: "id3"},
        {source: "id1", target: "id2"},
    ]
  }

  return (
    <>
      <h1>BJJ Notes</h1>
      <div className="card">
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
      </div>
      
      <div>
        <p>
        <ForceGraph2D 
        graphData={mockData}
        nodeRelSize={5}
        backgroundColor='white'
        height={500}
        width={500}
        linkWidth={15}
        // minZoom={0.01}
        // linkColor='red'
        enableNodeDrag={false}
        linkCurvature={0.3}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={0.5}
        linkDirectionalParticles={4}
        />
        </p>
      </div>
    </>
  )
}

export default App