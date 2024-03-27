import './TabButton.css';
import React from 'react';


const TabButton: React.FC<any> = (props) => {
    const {children, onSelect, isSelected } = props;

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}

export default TabButton;
