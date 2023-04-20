import React from 'react';
import './AboutUs.css'

function AboutUs(){
    return(
        <div className='aboutus'>
            <div className='aboutus_container'>
                <p className='aboutus_title'>About Us</p>
                <div className='aboutus_information'>
                <p>- Story Scope is a platform where people can create professional networks, talk with with various professionals by communicating, sharing knowledge, guiding people, get guided by people and so on.</p>
                <p>- At Story Scope, we have designed a system that works well for both students and professionals, and streamlined the networking/mentoring process making it easy and efficient.</p>
                <p>- Join the amazing community of immense professionals and start helping/benefitting from awesome posts!</p>
                </div>

                <div className='home_button'>
                        <button>GO TO HOME</button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;