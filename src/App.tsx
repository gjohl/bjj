import './App.css';
import graphData from './data/data-parser';
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
        graphData={graphData}
        />
        </p>
      </div>
    </>
  )
}

export default App;
