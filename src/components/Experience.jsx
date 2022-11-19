import React from 'react';
import '../stylesheets/Experience.css';

function Experience({ company, date, job, about }) {
    return (
        <div className='container-experience'>
            <img className='img-experience' src={require(`../img/experiences/xp-${company}.png`)} />
            <div className='about-experience'>
                <div className='job'>
                    <p>{date}</p>
                    <p><strong>{job}</strong></p>
                </div>
                <div className='about-job'>
                    <p>{about}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;