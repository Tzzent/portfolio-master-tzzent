import React from 'react';
import '../stylesheets/Technology.css';

function Technology({ technology, progress }) {
    return (
        <div className='container-technology'>
            <p>{technology}</p>
            <div className={`container-progress progress-${progress}`}>
            </div>
        </div>
    );
};

export default Technology;