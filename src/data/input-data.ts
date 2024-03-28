const transitionColorMap: { [index: string]: string } = {
    "topTransition": "#04A777",
    "bottomTransition": "#FED776",
    "submission": "#D81E5B",
};

const GRID_UNIT = 50;


type InputDataType = {
    nodes: {
        key: number;
        id: string;
        shortName: string;
        x: number;
        y: number,
        neighbors?: any[];
        links?: any[];
        color?: string;
    }[];
    links: {
        id?: number;
        name: string;
        transitionType: string;  // topTransition/bottomTransition/submission
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
            { "key": 0, "id": "closed-guard", "shortName": "CG", "x": 1*GRID_UNIT, "y": 0 },
            { "key": 10, "id": "half-guard", "shortName": "HG", "x": 1*GRID_UNIT, "y": 1*GRID_UNIT },
            { "key": 20, "id": "open-guard", "shortName": "OG", "x": 1*GRID_UNIT, "y": -1*GRID_UNIT },
            { "key": 30, "id": "de-la-riva-guard", "shortName": "DLR", "x": 1*GRID_UNIT, "y": 2*GRID_UNIT },
            { "key": 40, "id": "side-mount", "shortName": "SM", "x": 2*GRID_UNIT, "y": -2*GRID_UNIT },
            { "key": 50, "id": "knee-on-belly", "shortName": "KoB", "x": 3*GRID_UNIT, "y": -2*GRID_UNIT },
            { "key": 60, "id": "mount", "shortName": "M", "x": 4*GRID_UNIT, "y": -1*GRID_UNIT },
            { "key": 70, "id": "rear-mount", "shortName": "RM", "x": 4*GRID_UNIT, "y": 1*GRID_UNIT },
            { "key": 80, "id": "turtle", "shortName": "T", "x": 3*GRID_UNIT, "y": 2*GRID_UNIT },
            { "key": 100, "id": "standing", "shortName": "St", "x": -1*GRID_UNIT, "y": 0 },
            // { "id": 110, "name": "combat-base", "x": -50, "y": 50},
            // { "id": 120, "name": "headquarters", "x": 50, "y": 100 },
            { "key": 1000, "id": "submission", "shortName": "Sub", "x": 5*GRID_UNIT, "y": 0 },
        ],
        "links": [
            // Takedowns
            {
                "name": "Single leg takedown",
                "transitionType": "topTransition",
                "description": ["Gurp's notes on single leg takedown"],
                "relatedLinks": [],
                "source": "standing",
                "target": "closed-guard",
            },
            {
                "name": "Double leg takedown",
                "transitionType": "topTransition",
                "description": ["Gurp's notes on double leg takedown"],
                "relatedLinks": [],
                "source": "standing",
                "target": "closed-guard",
            },

            // Closed guard
            {
                "name": "Hip bump sweep",
                "transitionType": "bottomTransition",
                "description": ["Gurp's notes on hip bump"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Scissor sweep",
                "transitionType": "bottomTransition",
                "description": ["Gurp's notes on scissor"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Flower sweep",
                "transitionType": "bottomTransition",
                "description": ["Gurp's notes on flower"],
                "relatedLinks": [],
                "source": "closed-guard",
                "target": "side-mount",
            },
            {
                "name": "Guard break and knee slide",
                "transitionType": "topTransition",
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
                "transitionType": "bottomTransition",
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
                "transitionType": "bottomTransition",
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
                    "Slide their elbow close to their body, keep their hand pinned to the ground and lift the elbow up"
                ],
                "relatedLinks": ["https://www.youtube.com/watch?v=5M1wkbaOYUM"],
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
        link.curvature = link.curvature? link.curvature : 0.4 * (Math.random() - 0.5);

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

    // Add default node color
    inputData.nodes.forEach(node => {
        node.color = '#7925D3'
    })

    return inputData;

};


export default generateInputData;
