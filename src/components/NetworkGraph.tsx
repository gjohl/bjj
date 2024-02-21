import React, { useCallback } from 'react';
import { ForceGraph2D } from 'react-force-graph';

type Props = {
    graphData: { nodes: { id: string; val: number; }[]; links: { source: string; target: string; }[]}
}

const NetworkGraph: React.FC<Props> = (props : Props) => {
    const { graphData } = props;
    // const fgRef = useRef();

    const paintRing = useCallback((node: any, ctx: any) => {
        console.log(ctx)
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
        // ctx.fillStyle = "blue";
        ctx.fill();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.fillText(node.id, node.x, node.y);
      }, []);

    return (
        <ForceGraph2D 
        graphData={graphData}
        nodeAutoColorBy={"group"}
        enableNodeDrag={false}

        //  For debugging UI
        // backgroundColor='white'
        // height={500}
        // width={500}

        // Zoom-to-fit
        // ref={fgRef}
        // onEngineStop={() => fgRef.current?.zoomToFit(400)}

        // Link attributes        
        linkWidth={15}
        linkCurvature={"curvature"}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={0.5}
        linkDirectionalParticles={3}

        // Text in nodes
        nodeRelSize={0}
        autoPauseRedraw={false}
        nodeCanvasObjectMode={() => 'before' }
        nodeCanvasObject={paintRing}
        />
    )
}

export default NetworkGraph;
