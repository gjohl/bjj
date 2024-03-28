import './App.css';
// import graphData from './data/data-parser';
// import * as graphData from './data/position-data.json';
// import randomData, { genRandomTree } from './data/random-data';
import TaxonomyScreen from './screens/TaxonomyScreen';
import generateInputData from './data/input-data';


const App = () => {
    const inputData = generateInputData();


    return (
        <>
            <h1>BJJ Map</h1>

            <div>
                <TaxonomyScreen
                    graphData={inputData}
                />
            </div>
        </>
    )
}

export default App;
