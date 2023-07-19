import React, { FC } from 'react'

import Contact from './Contact/Contact'
import Education from './Education/Education'
import Interests from './Interests/Interests'
import Languages from './Languages/Languages'
import Profile from './Profile/Profile'

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
