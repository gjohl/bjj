import './TabButton.css';
import React from 'react';


const TabButton: React.FC<any> = (props) => {
    const {children, onSelect, isSelected } = props;

    return (
            <button id='tab-button' className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
    )
}

export default TabButton;
