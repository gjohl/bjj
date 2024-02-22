import * as graphData from './position-data.json';


type InputDataType = {
    nodes: { id: number; name: string; val: number; neighbors: any[]; links: any[] }[];
    links: { source: number; target: number; }[]
}

const dataParser = (inputData: InputDataType) => {
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

    return inputData
}

dataParser(graphData);

export default graphData;
