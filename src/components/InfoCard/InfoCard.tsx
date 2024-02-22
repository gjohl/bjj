import './InfoCard.css';
import React from "react";


const InfoCard: React.FC<any> = (props) => {
    const { sweepList, escapeList, submissionList } = props;

    return (
        <>
            <div className='infoTitle'>
                SIDE MOUNT
            </div>

            <div className='infoSubtitle'>
                Sweeps
            </div>
            <div className='infoListItems'>
                <ul>
                    {sweepList.map((item: string) => <li>{item}</li>)}
                </ul>
            </div>

            <div className='infoSubtitle'>
                Escapes
            </div>
            <div className='infoListItems'>
                <ul>
                    {escapeList.map((item: string) => <li>{item}</li>)}
                </ul>
            </div>

            <div className='infoSubtitle'>
                Submissions
            </div>
            <div className='infoListItems'>
                <ul>
                    {submissionList.map((item: string) => <li>{item}</li>)}
                </ul>
            </div>
        </>
    )
}

export default InfoCard;
