import './InfoCard.css';
import React from "react";


const InfoCard: React.FC<any> = (props) => {
    const { node, sweepList, escapeList, submissionList } = props;
    const titleName = node ? node.name : 'Select a node';
    
    // console.log(node);
    // const links = node ? node.links : [];
    // const linkNames = links ? links.map((link: any) => {link.name}) : [];
    // console.log(linkNames);

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
                            <ul>
                                {sweepList.map((item: string) => <li>{item}</li>)}
                            </ul>
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
