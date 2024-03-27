import { useState } from 'react';
import TabButton from '../UI/TabButton';
import './Section.css';

const containerStyles = {
    margin: 5,
    height: "20%",
    padding: '1rem',
    borderRadius: '6px',
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
        selectedMove,
        setSelectedMove
    } = props;

    const [selectedTab, setselectedTab] = useState('topTransition');
    const movesMapping = {
        'topTransition': topTransitions,
        'bottomTransition': bottomTransitions,
        'submission': submissions
    }
    // FIXME: resolve this once code is tidied
    // @ts-ignore
    const moves = movesMapping[selectedTab];
    console.log(selectedTab)

    return (
        // FIXME: resolve this once code is tidied
        // @ts-ignore
        <div style={containerStyles}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'flex-start',
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
                    backgroundColor: '#2f1d43',
                    borderRadius: '20px',
                }}
            >
                {/* Tab content */}
                <div className='infoSubtitle'>
                    {titleName.replaceAll('-', ' ').toUpperCase()}
                </div>
                <div className='infoListItems'>
                    <ListContents inputList={moves} onClick={setSelectedMove} selectedMove={selectedMove} />
                </div>
            </div>

        </div>
    )
};

const ListContents = (props: any) => {
    const { inputList, onClick, selectedMove } = props;
    console.log(inputList)
    console.log(selectedMove)
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => (
                <div id={item.name}>
                    <button
                        id="tab-button"
                        onClick={() => { onClick(item) }}
                        className={item.name === selectedMove?.name ? 'active' : undefined}
                    >
                        {item.name}
                    </button>
                </div>)
            )}
        </ul>
    }
    return "Select a position..."
};



export default PositionSectionTabs;
