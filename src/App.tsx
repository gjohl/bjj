import './App.css';
// import graphData from './data/data-parser';
// import * as graphData from './data/position-data.json';
import randomData, { genRandomTree } from './data/random-data';
import NetworkGraph from './components/NetworkGraph';


const App = () => {
    const inputData = {
        "nodes": [
            {"id": 0, "name": "closed-guard" }, 
            {"id": 40, "name": "side-mount" },
            {"id": 60, "name": "mount" }
        ],
        "links": [
            {"id": 0, "source": {"id": 0, "name": "closed-guard" }, "target": {"id": 40, "name": "side-mount" }, "curvature": 0},
            {"id": 10,"source": {"id": 0, "name": "closed-guard" }, "target": {"id": 40, "name": "side-mount" }, "curvature": 0.2},
            {"id": 20,"source": {"id": 0, "name": "closed-guard" }, "target": {"id": 40, "name": "side-mount" }, "curvature": 0.4},
            {"id": 30,"source": {"id": 0, "name": "closed-guard" }, "target": {"id": 60, "name": "mount" }},
            {"id": 40,"source": {"id": 40, "name": "side-mount" }, "target": {"id": 60, "name": "mount" }},
            {"id": 50,"source": {"id": 60, "name": "mount" }, "target": {"id": 60, "name": "mount" }}
        ]
    }
    ;
    // Populate links and neighbors array for each node.
    inputData.links.forEach(link => {
        // Find the source and target nodes of this link
        const a = inputData.nodes.filter(node => node.id === link.source.id)[0]
        const b = inputData.nodes.filter(node => node.id === link.target.id)[0]

        // Initialise the neighbors array if this does not already exist
        !a.neighbors && (a.neighbors = []);
        !b.neighbors && (b.neighbors = []);

        // Append a to b as neighbours and vice versa
        a.neighbors.push(b);
        b.neighbors.push(a);

        // Initialise links array if this does not already exist
        !a.links && (a.links = []);
        !b.links && (b.links = []);

        // Add the current link to the links array of each node
        a.links.push(link);
        b.links.push(link);
    });

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
                        graphData={inputData}
                    />
                </p>
            </div>
        </>
    )
}

export default App;
