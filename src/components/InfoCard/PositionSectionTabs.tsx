import { useState } from 'react';
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

const PositionSectionTabs = (props: any) => {
    const {
        titleName,
        topTransitions,
        bottomTransitions,
        submissions,
        setSelectedMove
    } = props;

    const [selectedTab, setselectedTab] = useState('topTransition');
    const movesMapping = {
        'topTransition': topTransitions,
        'bottomTransition': bottomTransitions,
        'submission': submissions
    }
    const moves = movesMapping[selectedTab];
    console.log(selectedTab)

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
                    <TabButton
                        isSelected={selectedTab === 'topTransition'}
                        onSelect={() => setselectedTab('topTransition')}>
                        Top
                    </TabButton>

                    <TabButton
                        isSelected={selectedTab === 'bottomTransition'}
                        onSelect={() => setselectedTab('bottomTransition')}>
                        Bottom
                    </TabButton>

                    <TabButton
                        isSelected={selectedTab === 'submission'}
                        onSelect={() => setselectedTab('submission')}>
                        Submissions
                    </TabButton>
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
                    {titleName.replaceAll('-', ' ').toUpperCase()}
                </div>
                <div className='infoListItems'>
                    <ListContents inputList={moves} onClick={setSelectedMove} />
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



export default PositionSectionTabs;
