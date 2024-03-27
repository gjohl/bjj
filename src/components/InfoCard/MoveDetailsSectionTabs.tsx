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

const 
MoveDetailsSectionTabs = (props: any) => {
    const {
        movetitle,
        moveDescription,
        moveRelatedLinks
    } = props;

    const [selectedTab, setselectedTab] = useState('notes');
    const notesSelected = selectedTab === 'notes';
    const linksSelected = selectedTab === 'links';

    return (
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
                    {movetitle}
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
    return "Then select a move..."
}


const ListDescription = (props: any) => {
    const { inputList } = props;
    if (inputList.length > 0) {
        return <ol>
            {inputList.map((item: any) => <div  id={item}> <li>{item}</li> </div>)}
        </ol>
    }
    return "Then select a move..."
}


export default MoveDetailsSectionTabs;
