import './InfoCard.css';
import React from "react";

const ListContents = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => <li>{item.name}</li>)}
        </ul>
    }
    return "Gurp needs to learn more..."

}


const InfoCard: React.FC<any> = (props) => {
    const { node, sweepList, escapeList, submissionList } = props;
    const titleName = node ? node.name : 'Select a node';

    let linkNames = [];
    let linkDescriptions = [];
    let linkRelatedLinks = [];
    let sweeps = []
    let escapes = [];
    let submissions = [];
    console.log(node);

    if (node && node.links) {
        linkNames = node.links.map((link: any) => link.name);
        linkDescriptions = node.links.map((link: any) => link.description);
        linkRelatedLinks = node.links.map((link: any) => link.relatedLinks);
        sweeps = node.links.filter((link: any) => link.transitionType === 'sweep');
        escapes = node.links.filter((link: any) => link.transitionType === 'escape');
        submissions = node.links.filter((link: any) => link.transitionType === 'submission');
        console.log(submissions);
    } else {
        console.log("Node is null or links array doesn't exist.");
    }

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
                            <ListContents inputList={sweeps}/>
                        </div>
                    </div>

                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Escapes
                        </div>
                        <div className='infoListItems'>
                            <ul>
                                {escapeList.map((item: string) => <li>{item}</li>)}
                            </ul>
                        </div>
                    </div>


                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Submissions
                        </div>
                        <div className='infoListItems'>
                            <ul>
                                {submissionList.map((item: string) => <li>{item}</li>)}
                            </ul>
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
                            Gurp's notes on the selected move.
                        </div>
                    </div>

                    <div className='infoSubsectionContainer'>
                        <div className='infoSubtitle'>
                            Related links
                        </div>

                        <div className='infoDetailRelatedLinks'>
                            <a href="http://w3schools.com">Link example</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoCard;
