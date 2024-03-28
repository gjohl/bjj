import React from 'react';
import { ForceGraph2D } from 'react-force-graph';


const NetworkGraph: React.FC<any> = (props) => {
    const {
        graphData,
        nodeRelSize,
        nodeCanvasObjectMode,
        nodeCanvasObject,
        linkWidth,
        linkDirectionalParticleWidth,
        onNodeClick,
        onLinkClick
    } = props;

    return (
        <ForceGraph2D
            graphData={graphData}
            
            //  For debugging UI
            // backgroundColor='white'
            height={500}
            width={900}

            // Link attributes        
            linkCurvature={"curvature"}
            linkDirectionalArrowLength={15}
            linkDirectionalArrowRelPos={0.93}
            linkLabel={''}
            linkDirectionalParticles={1.5}
            linkDirectionalParticleWidth={linkDirectionalParticleWidth}

            // Text in nodes
            nodeRelSize={nodeRelSize}
            autoPauseRedraw={false}
            nodeCanvasObjectMode={nodeCanvasObjectMode}
            nodeCanvasObject={nodeCanvasObject}
            nodeLabel={''}

            // Highlight
            linkWidth={linkWidth}
            onNodeClick={onNodeClick}
            onLinkClick={onLinkClick}

            d3AlphaDecay={1}
            enableNodeDrag={false}
            enablePanInteraction={false}
            enableZoomInteraction={false}
        />
    )

};


export default NetworkGraph;
