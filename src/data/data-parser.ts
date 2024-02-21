import * as inputData from './position-data.json';


type InputDataType = {
     nodes: { id: string; val: number; }[]; 
     links: { source: string; target: string; }[]
}

const dataParser = (inputData: InputDataType) => {

    return inputData
}

const graphData = dataParser(inputData);

export default graphData;
