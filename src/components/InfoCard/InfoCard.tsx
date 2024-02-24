import './InfoCard.css';
import React, { useState } from "react";

const ListContents = (props: any) => {
    const { inputList, onClick } = props;
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => <div> <button onClick={() => {onClick(item)}}>{item.name}</button> </div>)}
        </ul>
    }
    return "Gurp needs to learn more..."
}


const ListUrls = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ul>
            
            {inputList.map((item: any) => <div> <a href={item}>{item}</a> </div>)}
        </ul>
    }
    return "Gurp needs to find some links..."
}

const InfoCard: React.FC<any> = (props) => {
    const { node } = props;
    const titleName = node ? node.name : 'Select a node';
    const [selectedMove, setSelectedMove] = useState(null);

    // Selecting nodes
    let linkNames = [];
    let sweeps = []
    let escapes = [];
    let submissions = [];
    // console.log(node);

    if (node && node.links) {
        linkNames = node.links.map((link: any) => link.name);
        sweeps = node.links.filter((link: any) => link.transitionType === 'sweep');
        escapes = node.links.filter((link: any) => link.transitionType === 'escape');
        submissions = node.links.filter((link: any) => link.transitionType === 'submission');
        // console.log(sweeps);
    } else {
        console.log("Node is null or links array doesn't exist.");
    }

    // Selecting moves
    let moveDescription = "Gurp needs to make some notes...";
    let moveRelatedLinks: string[] = [];

    if (selectedMove) {
        moveDescription = selectedMove.description;
        moveRelatedLinks = selectedMove.relatedLinks;

    }

    console.log(selectedMove);

    return (
        <>
            <div>
                <div className='infoTitle'>
                    {titleName.toUpperCase().replace('-', ' ')}
                </div>

                <div className="subtitleContainer">
                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Sweeps
                        </div>
                        <div className='infoListItems'>
                            <ListContents inputList={sweeps} onClick={setSelectedMove} />
                        </div>
                    </div>

                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Escapes
                        </div>
                        <div className='infoListItems'>
                            <ListContents inputList={escapes} onClick={setSelectedMove} />
                        </div>
                    </div>


                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Submissions
                        </div>
                        <div className='infoListItems'>
                            <ListContents inputList={submissions} onClick={setSelectedMove} />
                        </div>
                    </div>


                </div>
            </div>

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
                            {moveDescription}
                        </div>
                    </div>

                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Related links
                        </div>

                        <div className='infoDetailRelatedLinks'>
                            <ListUrls inputList={moveRelatedLinks}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoCard;
