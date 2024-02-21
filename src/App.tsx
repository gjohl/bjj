import { useMemo, useState, useCallback } from 'react'
import './App.css'
import { ForceGraph2D } from 'react-force-graph';


const App = () => {
  const mockData = {
    nodes: [{id: 1}, {id: 2}, {id:3}],
    links: [{from: 1, to: 3}]
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
        graphData={mockData}/>
        </p>
      </div>
    </>
  )
}

export default App