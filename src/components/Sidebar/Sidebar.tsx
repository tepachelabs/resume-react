import React, { FC } from 'react'
import Profile from './Profile/Profile'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Languages from './Languages/Languages'
import Interests from './Interests/Interests'

const Sidebar = () =>{
    return (
        <div className="sidebar-wrapper">
            <Profile />
            <Contact />
            <Education />
            <Languages />
            <Interests />
        </div>
    )
}

export default Sidebar
