import React from 'react';
import { ForceGraph2D } from 'react-force-graph';


const NetworkGraph: React.FC<any> = (props) => {
    const {
        graphData,
        nodeRelSize,
        nodeCanvasObjectMode,
        nodeCanvasObject,
        linkWidth,
        onNodeClick,
        onLinkClick
    } = props;

    return (
        <ForceGraph2D
            graphData={graphData}
            nodeAutoColorBy={"group"}
            enableNodeDrag={false}

            //  For debugging UI
            // backgroundColor='white'
            height={500}
            width={900}

            // Zoom-to-fit
            // ref={fgRef}
            // onEngineStop={() => fgRef.current?.zoomToFit(1000)}

            // Link attributes        
            // linkWidth={15}
            linkCurvature={"curvature"}
            linkDirectionalArrowLength={10}
            linkDirectionalArrowRelPos={0.5}
            linkDirectionalParticles={3}

            // Text in nodes
            nodeRelSize={nodeRelSize}
            autoPauseRedraw={false}
            nodeCanvasObjectMode={nodeCanvasObjectMode}
            nodeCanvasObject={nodeCanvasObject}

            // Highlight
            linkWidth={linkWidth}
            onNodeClick={onNodeClick}
            onLinkClick={onLinkClick}

            d3AlphaDecay={1}
            enablePanInteraction={false}
            enableZoomInteraction={false}
        />
    )

};


export default NetworkGraph;
