import React from 'react'
import profilePicture from '../../../images/developer.png'

function Profile(props) {
    return (
        <div className="profile-container">
            <img src={profilePicture} className="profile" alt="logo" />
            <h1 className="name">{props.name}</h1>
            <h3 className="tagline">{props.tagline}</h3>
        </div>
    )
}

export default Profile