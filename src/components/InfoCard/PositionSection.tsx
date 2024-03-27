import './Section.css';

const PositionSection = (props: any) => {
    const {
        titleName,
        topTransitions,
        bottomTransitions,
        submissions,
        setSelectedMove
    } = props;
    return (
        <div>
            <div className='infoTitle'>
                {titleName.replaceAll('-', ' ').toUpperCase()}
            </div>

            <div className="sectionContainer">
                <div className='infoSubsectionContainer'>
                    <div className='infoSubtitle'>
                        Top Transitions
                    </div>
                    <div className='infoListItems'>
                        <ListContents inputList={topTransitions} onClick={setSelectedMove} />
                    </div>

                </div>

                <div className='infoSubsectionContainer'>
                    <div className='infoSubtitle'>
                        Bottom Transitions
                    </div>
                    <div className='infoListItems'>
                        <ListContents inputList={bottomTransitions} onClick={setSelectedMove} />
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
    )
};


const ListContents = (props: any) => {
    const { inputList, onClick } = props;
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => <div id={item.name ? item.name : item.id}> <button onClick={() => { onClick(item) }}>{item.name}</button> </div>)}
        </ul>
    }
    return "Select a position..."
};


export default PositionSection;
