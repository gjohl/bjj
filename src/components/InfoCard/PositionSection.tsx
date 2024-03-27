import './Section.css';

const PositionSection = (props: any) => {
    const {
        titleName,
        sweeps,
        escapes,
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
    )
};


const ListContents = (props: any) => {
    const { inputList, onClick } = props;
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => <div> <button onClick={() => { onClick(item) }}>{item.name}</button> </div>)}
        </ul>
    }
    return "Select a position..."
};


export default PositionSection;
