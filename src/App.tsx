import './App.css';
import graphData from './data/data-parser';
import randomData, {genRandomTree} from './data/random-data';
import NetworkGraph from './components/NetworkGraph';


const App = () => {
    console.log(genRandomTree(5))
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
