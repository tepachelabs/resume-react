import React, { FC } from 'react'
import Profile from './Profile/Profile'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Languages from './Languages/Languages'
import Interests from './Interests/Interests'
import Developer from "../../developer";

interface Props {
  profile: Developer['profile'];
  contact: Developer['contact'];
  education: Developer['education'];
  languages: Developer['languages'];
  interests: Developer['interests'];
}

const Sidebar: FC<Props> = (props) =>{
    return (
        <div className="sidebar-wrapper">
            <Profile
              name={props.profile.name}
              tagline={props.profile.tagline}
            />
            <Contact contact={props.contact} />
            <Education education={props.education} />
            <Languages languages={props.languages} />
            <Interests interests={props.interests} />
        </div>
    )
}

export default Sidebar