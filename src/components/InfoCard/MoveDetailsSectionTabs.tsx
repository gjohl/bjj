import { useState } from 'react';
import TabButton from '../UI/TabButton';
import './Section.css';

const containerStyles = {
    margin: 5,
    height: "20%",
    padding: '1rem',
    borderRadius: '6px',
    // backgroundColor: '#2f1d43',
    // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

const MoveDetailsSectionTabs = (props: any) => {
    const {
        moveDescription,
        moveRelatedLinks
    } = props;

    const [selectedTab, setselectedTab] = useState('notes');
    // const movesMapping = {
    //     'topTransition': topTransitions,
    //     'bottomTransition': bottomTransitions,
    //     'submission': submissions
    // }
    // const moves = movesMapping[selectedPositionType];
    // console.log(selectedPositionType)
    const notesSelected = selectedTab === 'notes';
    const linksSelected = selectedTab === 'links';

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
                        isSelected={selectedTab === 'notes'}
                        onSelect={() => setselectedTab('notes')}>
                        Notes
                    </TabButton>

                    <TabButton
                        isSelected={selectedTab === 'links'}
                        onSelect={() => setselectedTab('links')}>
                        Links
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
                    {"MOVE DETAILS"}
                </div>
                <div className='infoListItems'>
                    {notesSelected && <ListDescription inputList={moveDescription} />}
                    {linksSelected && <ListUrls inputList={moveRelatedLinks} />}
                </div>
            </div>

        </div>
    )
};


const ListUrls = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ul>
            {inputList.map((item: any) => <div id={item}> <a href={item}>{item}</a> </div>)}
        </ul>
    }
    return "Select a move..."
}


const ListDescription = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ol>
            {inputList.map((item: any) => <div  id={item}> <li>{item}</li> </div>)}
        </ol>
    }
    return "Select a move..."
}


export default MoveDetailsSectionTabs;
