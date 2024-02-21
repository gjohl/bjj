import React, { useRef } from 'react';
import { ForceGraph2D } from 'react-force-graph';

type Props = {
    graphData: { nodes: { id: string; val: number; }[]; links: { source: string; target: string; }[]}
}

const NetworkGraph: React.FC<Props> = (props : Props) => {
    const { graphData } = props;
    const fgRef = useRef();

    return (
        <ForceGraph2D 
        // For zoom-to-fit
        ref={fgRef}
        onEngineStop={() => fgRef.current.zoomToFit(400)}
        graphData={graphData}
        nodeRelSize={5}
        nodeAutoColorBy={"group"}
        // backgroundColor='white'
        // height={500}
        // width={500}
        linkWidth={15}
        // minZoom={0.01}
        // linkColor='red'
        enableNodeDrag={false}
        linkCurvature={"curvature"}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={0.5}
        linkDirectionalParticles={4}

        />
    )
}

export default NetworkGraph;
