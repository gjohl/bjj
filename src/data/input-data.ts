const transitionColorMap: { [index: string]: string } = {
    "sweep": "green",
    "escape": "red",
    "submission": "black",
};


type InputDataType = {
    nodes: {
        key: number;
        id: string;
        x: number;
        y: number,
        neighbors?: any[];
        links?: any[];
    }[];
    links: {
        id: number;
        name: string;
        transitionType: string;  // sweep/escape/submission
        description: string;
        relatedLinks: string[];
        source: string;
        target: string;
        color?: string;
        curvature?: number;
    }[]
};

const generateInputData = () => {
    const inputData: InputDataType = {
        "nodes": [
            { "key": 0, "id": "closed-guard", "x": 0, "y": 0 },
            { "key": 10, "id": "half-guard", "x": 50, "y": 0 },
            { "key": 20, "id": "open-guard", "x": 100, "y": 0 },
            { "key": 30, "id": "de-la-riva-guard", "x": 100, "y": 0 },
            { "key": 40, "id": "side-mount", "x": 0, "y": -50 },
            { "key": 50, "id": "knee-on-belly", "x": 0, "y": -100 },
            { "key": 60, "id": "mount", "x": 0, "y": 100 },
            { "key": 70, "id": "rear-mount", "x": 0, "y": 150 },
            { "key": 80, "id": "turtle", "x": 0, "y": 200 },
            { "key": 100, "id": "standing", "x": 0, "y": 70 },
            // { "id": 110, "name": "combat-base", "x": -50, "y": 50},
            // { "id": 120, "name": "headquarters", "x": 50, "y": 100 },
        ],
        "links": [
            {
                "id": 0,
                "name": "Hip bump sweep",
                "transitionType": "sweep",
                "description": "Gurp's notes on hip bump",
                "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard",
                "target": "side-mount",
                "curvature": 0,
            },
            {
                "id": 10,
                "name": "Scissor sweep",
                "transitionType": "sweep",
                "description": "Gurp's notes on scissor",
                "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard",
                "target": "side-mount",
                "curvature": 0.2,
            },
            {
                "id": 20,
                "name": "Flower sweep",
                "transitionType": "sweep",
                "description": "Gurp's notes on flower",
                "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard",
                "target": "side-mount",
                "curvature": 0.4,
            },
            {
                "id": 30,
                "name": "Guard break and knee slide",
                "transitionType": "escape",
                "description": "Gurp's notes on guard break",
                "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard",
                "target": "mount",
                "curvature": 0,
            },
            {
                "id": 40,
                "name": "Arm bar",
                "transitionType": "submission",
                "description": "Gurp's notes on arm bar",
                "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard",
                "target": "mount",
            },
        ]
    }
        ;
    // Populate links and neighbors array for each node.
    inputData.links.forEach(link => {
        link.color = transitionColorMap[link.transitionType];
        link.curvature = Math.random();

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

    return inputData;

};


export default generateInputData;
