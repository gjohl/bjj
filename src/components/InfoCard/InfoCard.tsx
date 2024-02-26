import './InfoCard.css';
import React from "react";
import PositionSection from './PositionSection';


const ListUrls = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ul>
            
            {inputList.map((item: any) => <div> <a href={item}>{item}</a> </div>)}
        </ul>
    }
    return "Select a move..."
}

const ListDescription = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ol>
            {inputList.map((item: any) => <div> <li>{item}</li> </div>)}
        </ol>
    }
    return "Select a move..."
}

const InfoCard: React.FC<any> = (props) => {
    const { node, selectedMove, setSelectedMove } = props;
    const titleName = node ? node.id : 'Select a node';

    // Selecting nodes
    let sweeps = []
    let escapes = [];
    let submissions = [];

    if (node && node.links) {
        sweeps = node.links.filter((link: any) => (link.transitionType === 'sweep') && (link.source.id === node.id));
        escapes = node.links.filter((link: any) => (link.transitionType === 'escape') && (link.source.id === node.id));
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
            <PositionSection 
              titleName={titleName}
              sweeps={sweeps}
              escapes={escapes}
              submissions={submissions}
              setSelectedMove={setSelectedMove}
            />

            <div className='infoDetailPanel'>
                <div className='infoDetailTitle'>
                    MOVE DETAILS
                </div>

                <div className='subtitleContainer'>
                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Gurp's Notes
                        </div>
                        <div className='infoDetailDescription'>
                            <ListDescription inputList={moveDescription} />
                        </div>
                    </div>

                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Related links
                        </div>

                        <div className='infoDetailRelatedLinks'>
                            <ListUrls inputList={moveRelatedLinks} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoCard;
