import React from 'react';
import '../stylesheets/Hobby.css';

function Hobby({ description, hobby }) {
    return (

        <div className='container-hobby'>
            <img className='img-hobby' src={require(`../img/hobbies/hobby-${hobby}.jpg`)} alt={hobby} />
            <div className='about-hobby'>
                <p><b>{hobby}</b></p>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Hobby;