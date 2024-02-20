'use client'

import React from 'react'

import Contact from '@/components/Sidebar/Contact/Contact'
import Education from '@/components/Sidebar/Education/Education'
import Interests from '@/components/Sidebar/Interests/Interests'
import Languages from '@/components/Sidebar/Languages/Languages'
import Profile from '@/components/Sidebar/Profile/Profile'

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
