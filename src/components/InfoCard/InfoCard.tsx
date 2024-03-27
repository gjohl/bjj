import React from "react";
import Paper from '@mui/material/Paper';

import PositionSection from './PositionSection';
import MoveDetailsSection from './MoveDetailsSection';


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
            <Paper elevation={20} style={{margin: 5, height: "20%"}}>
                <PositionSection
                    titleName={titleName}
                    topTransitions={topTransitions}
                    bottomTransitions={bottomTransitions}
                    submissions={submissions}
                    setSelectedMove={setSelectedMove}
                />

            </Paper>

            <Paper elevation={20} style={{margin: 5, height: "20%"}}>
                <MoveDetailsSection
                    moveDescription={moveDescription}
                    moveRelatedLinks={moveRelatedLinks}
                />
            </Paper>


        </>
    )
}

export default InfoCard;
