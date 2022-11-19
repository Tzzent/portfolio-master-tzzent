import React from 'react';
import '../stylesheets/Other.css';

function Blog({ title, description, linkdemo, img }) {
    return (
        <div className='container-other'>
            <div className='about-other'>
                <p>Other</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <a target='_blank' rel='noopener noreferrer' href={linkdemo}>dev.to</a>
            </div>
            <img className='img-other' src={require(`../img/others/ws-${img}.png`)} alt={`other-${img}`} />
        </div>
    );
};

export default Blog;