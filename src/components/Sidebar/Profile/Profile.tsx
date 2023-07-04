import React, { FC } from 'react'

interface Props {
  name: string;
  tagline: string;
}

const Profile: FC<Props> = (props) => {
    return (
        <div className="profile-container">
            <img src="/images/developer.png" className="profile" alt="logo" />
            <h1 className="name">{props.name}</h1>
            <h3 className="tagline">{props.tagline}</h3>
        </div>
    )
}

export default Profile