'use client'

import Img from 'next/image'
import React, { useContext } from 'react'

import DeveloperContext from '@/context/DeveloperContext'

const Profile = () => {
  const { profile } = useContext(DeveloperContext)

  return (
    <div className="profile-container flex flex-col items-center">
      <Img
        className="profile"
        alt="logo"
        src="/images/developer.png"
        height={ 100 }
        width={ 100 }
        priority
      />
      <h1 className="name">{ profile.name }</h1>
      <h3 className="tagline">{ profile.tagline }</h3>
    </div>
  )
}

export default Profile
