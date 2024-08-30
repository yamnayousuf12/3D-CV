import React, { useState } from 'react';

const DropdownSection = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleSection = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="dropdown-section">
            <h2 className="dropdown-header" onClick={toggleSection}>{title}</h2>
            <div className="dropdown-content" style={{ display: isActive ? 'block' : 'none' }}>
                {children}
            </div>
        </div>
    );
};

export default DropdownSection;


