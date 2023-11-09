import React from 'react';
import {Outlet} from 'react-router-dom'
import Profile from './Profile';
import ProfileClass from './ProfileClass'
import AboutUs from './Aboutclass';
const About = () => {
    return(
        <div className='pt-28'>
            <h1>Hello About us</h1>
            {/* <AboutUs/> */}
            <Outlet/>
        </div>
        
    );
}
export default About