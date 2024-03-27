import React, { useState } from "react";

import PositionSection from './PositionSection';
import MoveDetailsSection from './MoveDetailsSection';
import SectionCard from "./SectionCard";


const divStyle = {
    // borderRadius: 5,
    margin: 5,
    height: "20%",
    padding: '1rem',
    borderRadius: '6px',
    backgroundColor: '#2f1d43',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    
};

const InfoCard: React.FC<any> = (props) => {
    const { node, selectedMove, setSelectedMove } = props;
    const titleName = node ? node.id : 'Select a node';

    // Selecting nodes
    let topTransitions = []
    let bottomTransitions = [];
    let submissions = [];

    if (node && node.links) {
        topTransitions = node.links.filter((link: any) => (link.transitionType === 'topTransition') && (link.source.id === node.id));
        bottomTransitions = node.links.filter((link: any) => (link.transitionType === 'bottomTransition') && (link.source.id === node.id));
        submissions = node.links.filter((link: any) => (link.transitionType === 'submission') && (link.source.id === node.id));
    } else {
        console.log("Node is null or links array doesn't exist.");
    }

    // Selecting moves
    let moveDescription: string[] = [];
    let moveRelatedLinks: string[] = [];

    if (selectedMove) {
        moveDescription = selectedMove.description;
        moveRelatedLinks = selectedMove.relatedLinks;
    }

    return (
        <>
            <div style={divStyle}>
                <PositionSection
                    titleName={titleName}
                    topTransitions={topTransitions}
                    bottomTransitions={bottomTransitions}
                    submissions={submissions}
                    setSelectedMove={setSelectedMove}
                />

            </div>

            <div style={divStyle}>
                <MoveDetailsSection
                    moveDescription={moveDescription}
                    moveRelatedLinks={moveRelatedLinks}
                />
            </div>

            <div>
                <SectionCard 
                    titleName={titleName}
                    topTransitions={topTransitions}
                    bottomTransitions={bottomTransitions}
                    submissions={submissions}
                    setSelectedMove={setSelectedMove}
                />
            </div>

        </>
    )
}

export default InfoCard;
