import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

type Props = {
    graphData: { nodes: { id: string; val: number; }[]; links: { source: string; target: string; }[]}
}

const NetworkGraph: React.FC<Props> = (props : Props) => {
    const { graphData } = props;
    return (
        <ForceGraph2D 
        graphData={graphData}
        nodeRelSize={5}
        // backgroundColor='white'
        // height={500}
        // width={500}
        linkWidth={15}
        // minZoom={0.01}
        // linkColor='red'
        enableNodeDrag={false}
        linkCurvature={0.3}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={0.5}
        linkDirectionalParticles={4}
        />
    )
}

export default NetworkGraph;
