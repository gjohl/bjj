import React, { useCallback, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

type Props = {
    graphData: { nodes: { id: string; val: number; }[]; links: { source: string; target: string; }[]}
};

const NetworkGraph: React.FC<Props> = (props : Props) => {
    const { graphData } = props;
    const NODE_R = 8;
    // const fgRef = useRef();

    const paintRing = useCallback((node: any, ctx: any) => {
        // Add ring just for highlighted nodes
        // ctx.beginPath();
        // ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
        // ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
        // ctx.fill();

        // Main node
        // ctx.beginPath();
        // ctx.arc(node.x, node.y, NODE_R, 0, 2 * Math.PI, false);
        // // ctx.fillStyle = "blue";
        // ctx.fill();
            
        // Text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.fillText(node.id, node.x, node.y);
      }, []);

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState(null);

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
      };

    // const handleNodeHover = node => {
    // highlightNodes.clear();
    // highlightLinks.clear();
    // if (node) {
    //     highlightNodes.add(node);
    //     node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
    //     node.links.forEach(link => highlightLinks.add(link));
    // }
    // setHoverNode(node || null);
    //     updateHighlight();
    // };

    // const handleLinkHover = link => {
    // highlightNodes.clear();
    // highlightLinks.clear();

    // if (link) {
    //     highlightLinks.add(link);
    //     highlightNodes.add(link.source);
    //     highlightNodes.add(link.target);
    // }

    // updateHighlight();
    // };

    console.log(highlightNodes);



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
        // linkWidth={15}
        linkCurvature={"curvature"}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={0.5}
        linkDirectionalParticles={3}

        // Text in nodes
        nodeRelSize={NODE_R}
        autoPauseRedraw={false}
        nodeCanvasObjectMode={() => 'before' }
        // nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
        nodeCanvasObject={paintRing}

        // Highlight
        linkWidth={link => highlightLinks.has(link) ? 10 : 5}
        // onNodeHover={handleNodeHover}
        // onLinkHover={handleLinkHover}
        />
    )
}

export default NetworkGraph;
