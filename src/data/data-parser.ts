import * as inputData from './position-data.json';


type InputDataType = {
     nodes: { id: string; val: number; }[]; 
     links: { source: string; target: string; }[]
}

const dataParser = (inputData: InputDataType) => {
    // cross-link node objects
    inputData.links.forEach(link => {
        const a = inputData.nodes.filter((currentValue, index, arr) => {currentValue.id == link.source});
        const b = inputData.nodes.filter((currentValue, index, arr) => {currentValue.id == link.target});
        !a.neighbors && (a.neighbors = []);
        !b.neighbors && (b.neighbors = []);
        a.neighbors.push(b);
        b.neighbors.push(a);
    
        !a.links && (a.links = []);
        !b.links && (b.links = []);
        a.links.push(link);
        b.links.push(link);
    });

    return inputData
}

const graphData = dataParser(inputData);

export default graphData;
