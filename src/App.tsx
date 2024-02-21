// import { useMemo, useState, useCallback } from 'react'
import './App.css';
import * as positionData from './data/position-data.json';
import NetworkGraph from './components/NetworkGraph';


const App = () => {
  return (
    <>
      <h1>BJJ Notes</h1>
      <div className="card">
        <p className="read-the-docs">
            Coming soon...
        </p>
      </div>
      
      <div>
        <p>
        <NetworkGraph 
        graphData={positionData}
        />
        </p>
      </div>
    </>
  )
}

export default App;
