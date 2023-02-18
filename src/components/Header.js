import React from 'react';
import Profile from '../images/profile-1.jpg';

export default function Header() {

    const name = "Guest";
    const emailURL = "mailto:nnheo@example.com";
    const linkedInURL = "https://www.linkedin.com/in/joshua-m";
    return (
        <header>
            <img className='header-image' src={Profile} alt={name}/>
            <div className='header-content'>
                <h3 className='header-name'>New User</h3>
                <p className='header-carrier'>Desinger</p>
                <p className='header-desc'>First react app</p>
                <div className='header-a'>
                    <a className='header-email' href={emailURL}>Email</a>
                    <a className='header-linkedIn' href={linkedInURL}>LinkedIn</a>
                </div>
            </div>
        </header>
    )
}