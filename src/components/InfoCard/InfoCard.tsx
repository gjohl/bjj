import React from "react";

import PositionSectionTabs from "./PositionSectionTabs";
import MoveDetailsSectionTabs from "./MoveDetailsSectionTabs";


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
    let movetitle = "MOVE DETAILS";
    let moveDescription: string[] = [];
    let moveRelatedLinks: string[] = [];

    if (selectedMove) {
        movetitle = selectedMove.name;
        moveDescription = selectedMove.description;
        moveRelatedLinks = selectedMove.relatedLinks;
    }

    return (
        <>
            <div>
                <PositionSectionTabs 
                    titleName={titleName}
                    topTransitions={topTransitions}
                    bottomTransitions={bottomTransitions}
                    submissions={submissions}
                    selectedMove={selectedMove}
                    setSelectedMove={setSelectedMove}
                />
            </div>

            <div>
                <MoveDetailsSectionTabs 
                    movetitle={movetitle}
                    moveDescription={moveDescription}
                    moveRelatedLinks={moveRelatedLinks}
                />
            </div>

        </>
    )
}

export default InfoCard;
