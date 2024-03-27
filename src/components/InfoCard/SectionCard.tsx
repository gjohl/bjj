import TabButton from '../UI/TabButton';
import './Section.css';

const containerStyles = {
    margin: 5,
    height: "20%",
    padding: '1rem',
    borderRadius: '6px',
    // backgroundColor: '#2f1d43',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

const SectionCard = (props: any) => {
    const { titleName, moves, setSelectedMove } = props;

    return (
        <div style={containerStyles}>
            <div
                style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1, 
                    // // backgroundColor: 'red',
                    justifyContent: 'flex-start',
                    // alignContent: 'right',
                    // float: 'right'
                    // marginLeft: 'auto', 
                    // marginRight: 0,
                }}
            >
                {/* Left hand tab buttons */}
                <menu>
                    <TabButton isSelected={true}>Button1</TabButton>
                    <TabButton isSelected={false}>Button2</TabButton>
                    <TabButton isSelected={false}>Button3</TabButton>
                </menu>
            </div>

            <div
                style={{ 
                    flex: 4, 
                    backgroundColor: '#2f1d43' 
            }}
            >
                {/* Tab content */}
                <div className='infoSubtitle'>
                        {titleName}
                    </div>
                    <div className='infoListItems'>
                        {/* <ListContents inputList={submissions} onClick={setSelectedMove} /> */}
                        <ListContents inputList={moves} onClick={setSelectedMove} />
                    </div>
            </div>

            {/* <div className='infoTitle'>
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

            </div> */}
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



export default SectionCard;
