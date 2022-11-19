import React from 'react';
import '../stylesheets/Project.css';

function Project({ linkdemo, linkcode, tags, project, title, description }) {
    return (
        <div className='container-project'>
            <img className='img-project' src={require(`../img/projects/ws-${project}.png`)} alt={project} />
            <div className='about-project'>
                <p>{tags}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='buttons-project'>
                    <a target='_blank' rel='noopener noreferrer' href={linkdemo} className='btn-demo'>Demo</a>
                    <a target='_blank' rel='noopener noreferrer' href={linkcode} className='btn-code'>Code</a>
                </div>
            </div>
        </div>
    );
};

export default Project;