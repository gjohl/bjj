import React, { useCallback, useState } from 'react';

import InfoCard from '../components/InfoCard/InfoCard';
import NetworkGraph from '../components/Graph/NetworkGraph';


type Node = { key: number; id: string; shortName: string; val: number; x: number; y: number };
type Link = { source: string; target: string; };


const TaxonomyScreen: React.FC<any> = (props) => {
    const { graphData } = props;

    const NODE_R = 10;

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [clickNode, setClickNode] = useState(null);
    const [selectedMove, setSelectedMove] = useState(null);

    const paintRing = useCallback((node: Node, ctx: any) => {
        //  muted lavender #2f1d43
        // bright purple #7925D3
        // lilac #BE97C6

        const nodeText = node.shortName;

        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_R, 0, 2 * Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        // Add ring just for highlighted nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
        ctx.fillStyle = node === clickNode ? '#7925D3' : '#2f1d43';
        ctx.fill();


        // Text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ebe7ef";
        ctx.fillText(nodeText, node.x, node.y);
    }, [clickNode]);


    const handleNodeClick = (node: any) => {
        highlightNodes.clear();
        highlightLinks.clear();
        setSelectedMove(null);
        if (node) {
            highlightNodes.add(node);
            // Highlight target nodes which can be reached from this position
            node.links.forEach((link: { target: object }) => highlightNodes.add(link.target));
            // Highlight links which begin from this position
            node.links.filter((item: any) => item.source.id === node.id).forEach((link: object) => highlightLinks.add(link));
        }
        setClickNode(node || null);
        updateHighlight();
    };

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };


    return (
        <>
            <div>
                <InfoCard
                    node={clickNode}
                    selectedMove={selectedMove}
                    setSelectedMove={setSelectedMove}
                />

                <NetworkGraph
                    graphData={graphData}
                    nodeRelSize={NODE_R}
                    nodeCanvasObjectMode={(node: Node) => highlightNodes.has(node) ? 'before' : 'after'}
                    // nodeCanvasObjectMode={'replace'}
                    nodeCanvasObject={paintRing}
                    linkWidth={(link: Link) => highlightLinks.has(link) ? 5 : 2}
                    onNodeClick={handleNodeClick}
                    onLinkClick={() => { }}
                />
            </div>

        </>
    )
}

export default TaxonomyScreen;
