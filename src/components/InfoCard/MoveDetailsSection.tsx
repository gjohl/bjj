const MoveDetailsSection = (props) => {
    const { moveDescription, moveRelatedLinks } = props;
    return (
        <div className='infoDetailPanel'>
            <div className='infoTitle'>
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
    )
};


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


export default MoveDetailsSection;
