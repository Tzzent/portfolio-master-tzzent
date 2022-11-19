import React from "react";
import '../stylesheets/Profile.css'
import imgProfile from '../img/profile-tzzent.jpg';
import { GrMail } from 'react-icons/gr';
import { MdCall } from 'react-icons/md';

function Profile({ name, career, mail, phonenumber }) {
    return (
        <div className='container-profile'>
            <img className='profile-img' src={imgProfile} alt='Tzzent' />

            <div className='dates'>
                <div className='profession'>
                    <h3>{name}</h3>
                    <p>{career}</p>
                </div>
                <div className='contact'>
                    <div className='contact-date'> <GrMail /> <a target='_blank' rel='noopener noreferrer' href={`mailto:${mail}`}>{mail}</a> </div>
                    <div className='contact-date'> <MdCall /> <a target='_blank' rel='noopener noreferrer' href={`https://api.whatsapp.com/send?phone=${phonenumber}&text=Hola!%20Quiero%20contratar%20sus%20servicios!`}>{phonenumber}</a> </div>
                </div>

                <div className='about-me'>
                    <p>Systems Engineering student, who works as a developer willing to learn and create outstanding user interface applications.</p>
                </div>
            </div>
        </div>
    );
};


export default Profile;