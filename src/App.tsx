import './App.css';
// import graphData from './data/data-parser';
// import * as graphData from './data/position-data.json';
// import randomData, { genRandomTree } from './data/random-data';
import NetworkGraph from './components/NetworkGraph';


const App = () => {
    const inputData = {
        "nodes": [
            { "id": 0, "name": "closed-guard", "x": 0, "y": 0 },
            { "id": 10, "name": "half-guard", "x": 50, "y": 0 },
            { "id": 40, "name": "side-mount", "x": 0, "y": -50 },
            { "id": 60, "name": "mount", "x": 0, "y": 100 },
        ],
        "links": [
            { "id": 0, "source": 0, "sourceNode": { "id": 0, "name": "closed-guard" }, "target": 40, "targetNode": { "id": 40, "name": "side-mount" }, "curvature": 0, "color": 'red' },
            { "id": 10, "source": 0, "sourceNode": { "id": 0, "name": "closed-guard" }, "target": 40, "targetNode": { "id": 40, "name": "side-mount" }, "curvature": 0.2, "color": 'green' },
            { "id": 20, "source": 0, "sourceNode": { "id": 0, "name": "closed-guard" }, "target": 40, "targetNode": { "id": 40, "name": "side-mount" }, "curvature": 0.4, "color": 'red' },
            { "id": 30, "source": 0, "sourceNode": { "id": 0, "name": "closed-guard" }, "target": 60, "targetNode": { "id": 60, "name": "mount" }, "color": 'blue' },
            // {"id": 40,"source": {"id": 40, "name": "side-mount" }, "target": {"id": 60, "name": "mount" }},
            // {"id": 50,"source": {"id": 60, "name": "mount" }, "target": {"id": 60, "name": "mount" }}
        ]
    }
        ;
    // Populate links and neighbors array for each node.
    inputData.links.forEach(link => {
        // Find the source and target nodes of this link
        const a = inputData.nodes.filter(node => node.id === link.source)[0]
        const b = inputData.nodes.filter(node => node.id === link.target)[0]

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
