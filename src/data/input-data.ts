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
        id?: number;
        name: string;
        transitionType: string;  // sweep/escape/submission
        description: string[];
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
            { "key": 1000, "id": "submission", "x": 100, "y": 100 },
        ],
        "links": [
            // Takedowns
            {
                "name": "Single leg takedown",
                "transitionType": "sweep",
                "description": ["Gurp's notes on single leg takedown"],
                "relatedLinks": [],
                "source": "standing",
                "target": "closed-guard",
            },
            {
                "name": "Double leg takedown",
                "transitionType": "sweep",
                "description": ["Gurp's notes on double leg takedown"],
                "relatedLinks": [],
                "source": "standing",
                "target": "closed-guard",
            },

            // Closed guard
            {
                "name": "Hip bump sweep",
                "transitionType": "sweep",
                "description": ["Gurp's notes on hip bump"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Scissor sweep",
                "transitionType": "sweep",
                "description": ["Gurp's notes on scissor"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Flower sweep",
                "transitionType": "sweep",
                "description": ["Gurp's notes on flower"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Guard break and knee slide",
                "transitionType": "escape",
                "description": ["Gurp's notes on guard break", "Step 2"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "mount",
            },
            {
                "name": "Arm bar",
                "transitionType": "submission",
                "description": ["Gurp's notes on arm bar"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "submission",
            },
            // De La Riva Guard
            {
                "name": "Sit up sweep",
                "transitionType": "sweep",
                "description": [
                    "(DLR guard sitting on opp's right foot)",
                    "Opp breaks your grip so grab his sleeve (with your right hand)", 
                    "Right foot above knee & kick to unbalance", 
                    "Same time, sit up & left foot hit the ground",
                    "Hug their knee with left arm",
                    "Pass their sleeve from your right hand to left hand",
                    "Grab their collar with right hand, flare elbow out and pull",
                    "Left knee between their legs, Right leg post",
                    "Slide around to seatbelt side control"
                ],
                "relatedLinks": ["https://www.youtube.com/watch?v=2PRF0gb-Bh0"],
                "source": "de-la-riva-guard",
                "target": "side-mount",
            },
            {
                "name": "Sweep to mount",
                "transitionType": "sweep",
                "description": [
                    "(DLR guard sitting on opp's right foot with right hand grip on lapel)",
                    "Right foot above knee & kick to unbalance", 
                    "Right foot back on hip as they step forward again",
                    "Pull to unbalance them forwards until their hips are above yours",
                    "Right foot pushes up and over, staying on their left hip",
                    "Come over into mount"
            
                ],
                "relatedLinks": ["https://www.youtube.com/watch?v=EgnTI2PXheE"],
                "source": "de-la-riva-guard",
                "target": "mount",
            },
            // Mount
            {
                "name": "Americana from mount",
                "transitionType": "submission",
                "description": [
                    "Right hand slowly creep their arm higher up their body",
                    "When above their head, grab their wrist with left hand",
                    "Right hand continues to creep up under their elbow and grab your left wrist",
                    "Apply Americana"
                ],
                "relatedLinks": [],
                "source": "mount",
                "target": "submission",
            },
        ]
    };

    // Populate links and neighbors array for each node.
    let counter = 0;
    inputData.links.forEach(link => {
        link.id = counter;
        link.color = transitionColorMap[link.transitionType];
        link.curvature = link.curvature? link.curvature : Math.random();

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

        counter = counter + 1
    });

    return inputData;

};


export default generateInputData;
