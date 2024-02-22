import './App.css';
// import graphData from './data/data-parser';
// import * as graphData from './data/position-data.json';
// import randomData, { genRandomTree } from './data/random-data';
import NetworkGraph from './components/NetworkGraph';
import generateInputData from './data/input-data';


const App = () => {
    const inputData = generateInputData();


    return (
        <>
            <h1>BJJ Notes</h1>

            <div>
                <NetworkGraph
                    graphData={inputData}
                />
            </div>
        </>
    )
}

export default App;
