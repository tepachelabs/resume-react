import React, { useContext } from 'react'

import DeveloperContext from '../../../context/DeveloperContext';

const Profile = () => {
    const { profile } = useContext(DeveloperContext);

    return (
        <div className="profile-container">
            <img src="/images/developer.png" className="profile" alt="logo" />
            <h1 className="name">{profile.name}</h1>
            <h3 className="tagline">{profile.tagline}</h3>
        </div>
    )
}

export default Profile
