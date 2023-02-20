import React from 'react';
import Profile from '../images/profile-1.jpg';

export default function Header(props) {

    const emailURL = "mailto:nnheo@example.com";
    const linkedInURL = "https://www.linkedin.com/in/joshua-m";
    return (
        <header>
            <img className='header-image' src={Profile} alt={props.data.first_name}/>
            <div className='header-content'>
                <h3 className='header-name'>{`${props.data.first_name} ${props.data.last_name}`}</h3>
                <p className='header-carrier'>{props.data.carrier}</p>
                <p className='header-desc'>{props.data.description}</p>
                <div className='header-a'>
                    <a className='header-email' href={emailURL}>Email</a>
                    <a className='header-linkedIn' href={linkedInURL}>LinkedIn</a>
                </div>
            </div>
        </header>
    )
}