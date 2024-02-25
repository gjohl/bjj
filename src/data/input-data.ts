type InputDataType = {
    nodes: { key: number; id: string; x: number; y: number, neighbors: any[]; links: any[]; }[];
    links: {
        id: number; name: string; transitionType: string;
        description: string; relatedLinks: string[];
        sourceNode: any; source: string; target: string; targetNode: any; curvature: number, color: string
    }[]
};

const generateInputData = () => {
    const inputData: InputDataType = {
        "nodes": [
            //  id=0, name="Closed Guard", position=top/bottom, 
            //  x, y, neighbours, links
            { "key": 0, "id": "closed-guard", "x": 0, "y": 0, "neighbors": [], "links": [] },
            { "key": 10, "id": "half-guard", "x": 50, "y": 0, "neighbors": [], "links": [] },
            { "key": 20, "id": "open-guard", "x": 100, "y": 0, "neighbors": [], "links": [] },
            { "key": 30, "id": "de-la-riva-guard", "x": 100, "y": 0, "neighbors": [], "links": [] },
            { "key": 40, "id": "side-mount", "x": 0, "y": -50, "neighbors": [], "links": [] },
            { "key": 50, "id": "knee-on-belly", "x": 0, "y": -100, "neighbors": [], "links": [] },
            { "key": 60, "id": "mount", "x": 0, "y": 100, "neighbors": [], "links": [] },
            { "key": 70, "id": "rear-mount", "x": 0, "y": 150, "neighbors": [], "links": [] },
            { "key": 80, "id": "turtle", "x": 0, "y": 200, "neighbors": [], "links": [] },
            { "key": 100, "id": "standing", "x": 0, "y": 70, "neighbors": [], "links": [] },
            // { "id": 110, "name": "combat-base", "x": -50, "y": 50, "neighbors": [], "links": [] },
            // { "id": 120, "name": "headquarters", "x": 50, "y": 100, "neighbors": [], "links": [] },
        ],
        "links": [
            // id=0, name="Flower sweep", transitionType=sweep/escape/submission
            // "description"="Gurp's notes on this", "relatedLinks"=["url1.com", "url2.com"]
            // source=nodeId, sourceNode=node (auto-generate?), target=nodeId, targetNode=node (auto-generate?),
            // curvature, color, 
            {
                "id": 0, "name": "Hip bump sweep", "transitionType": "sweep",
                "description": "Gurp's notes on hip bump", "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard", "sourceNode": { "id": "closed-guard", "name": "closed-guard" }, "target": "side-mount" , "targetNode": { "id": "side-mount" , "name": "side-mount" },
                "curvature": 0, "color": 'red'
            },
            {
                "id": 10, "name": "Scissor sweep", "transitionType": "sweep",
                "description": "Gurp's notes on scissor", "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard", "sourceNode": { "id": "closed-guard", "name": "closed-guard" }, "target": "side-mount" , "targetNode": { "id": "side-mount" , "name": "side-mount" },
                "curvature": 0.2, "color": 'green'
            },
            {
                "id": 20, "name": "Flower sweep", "transitionType": "sweep",
                "description": "Gurp's notes on flower", "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard", "sourceNode": { "id": "closed-guard", "name": "closed-guard" }, "target": "side-mount" , "targetNode": { "id": "side-mount" , "name": "side-mount" },
                "curvature": 0.4, "color": 'red'
            },
            {
                "id": 30, "name": "Guard break and knee slide", "transitionType": "escape",
                "description": "Gurp's notes on guard break", "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard", "sourceNode": { "id": "closed-guard", "name": "closed-guard" }, "target": "mount" , "targetNode": { "id": "mount" , "name": "mount" },
                "curvature": 0, "color": 'blue'
            },
            {
                "id": 40, "name": "Arm bar", "transitionType": "submission",
                "description": "Gurp's notes on arm bar", "relatedLinks": ["http://www.youtube.com/watch?v=RfwI9V7gKwQ", "http://www.grapplearts.com/Blog/2012/03/a-glossary-of-guards-part-1-the-closed-guard/"],
                "source": "closed-guard", "sourceNode": { "id": "closed-guard", "name": "closed-guard" }, "target": "mount" , "targetNode": { "id": "mount" , "name": "mount" },
                "curvature": 0, "color": 'pink'
            },
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

    return inputData;

};


export default generateInputData;
