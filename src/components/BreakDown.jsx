import React from 'react';
import '../stylesheets/BreakDown.css';


function BreakDown({ nameBD }) {
    return (
        <div className='container-bd'>
            <h3>{nameBD}</h3>
        </div>
    );
};

export default BreakDown;