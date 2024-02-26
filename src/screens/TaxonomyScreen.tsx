import './TaxonomyScreen.css';

import React, { useCallback, useState } from 'react';
import InfoCard from '../components/InfoCard/InfoCard';
import NetworkGraph from '../components/Graph/NetworkGraph';


type Node = { key: number; id: string; val: number; x: number; y: number };
// type Link = { source: number; target: number; };


const TaxonomyScreen: React.FC<any> = (props) => {
    const { graphData } = props;

    const NODE_R = 8;

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [clickNode, setClickNode] = useState(null);
    const [selectedMove, setSelectedMove] = useState(null);

    const paintRing = useCallback((node: Node, ctx: any) => {
        const nodeText = node.id.split('-').reduce((response, word) => response += word.slice(0, 1), '')
        // Add ring just for highlighted nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
        ctx.fillStyle = node === clickNode ? 'red' : 'black';
        ctx.fill();

        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_R, 0, 2 * Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        // Text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        ctx.fillText(nodeText, node.x, node.y);
    }, []);

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    const handleNodeClick = (node: any) => {
        highlightNodes.clear();
        highlightLinks.clear();
        setSelectedMove(null);
        if (node) {
            highlightNodes.add(node);
            node.neighbors.forEach((neighbor: object) => highlightNodes.add(neighbor));
            node.links.forEach((link: object) => highlightLinks.add(link));
        }
        setClickNode(node || null);
        updateHighlight();
    };

    // const handleLinkClick = (link: Link) => {
    //     highlightNodes.clear();
    //     highlightLinks.clear();
    //     setSelectedMove(null);
    //     if (link) {
    //         highlightLinks.add(link);
    //         highlightNodes.add(link.source);
    //         highlightNodes.add(link.target);
    //     }
    //     updateHighlight();
    // };

    console.log(graphData)

    return (
        <>

            <div>
                <InfoCard
                    node={clickNode}
                    selectedMove={selectedMove}
                    setSelectedMove={setSelectedMove}
                />
            </div>



            <div>
                <NetworkGraph
                    graphData={graphData}
                    nodeRelSize={NODE_R}
                    nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : 'after'}
                    nodeCanvasObject={paintRing}
                    linkWidth={link => highlightLinks.has(link) ? 10 : 5}
                    onNodeClick={handleNodeClick}
                    // onLinkClick={handleLinkClick}
                    onLinkClick={() => { }}
                />
            </div>
        </>



    )
}

export default TaxonomyScreen;
