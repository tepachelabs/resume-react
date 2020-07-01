import React from 'react'
import Profile from './Profile/Profile'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Languages from './Languages/Languages'
import Interests from './Interests/Interests'

function Sidebar(props){
    return (
        <div className="sidebar-wrapper">
            <Profile name={props.profile.name} tagline={props.profile.tagline}/>
            <Contact 
                email={props.contact.email}
                website={props.contact.website}
                phone={props.contact.phone}
                linkedin={props.contact.linkedin}
                github={props.contact.github}
                twitter={props.contact.twitter}
                />
            <Education educationItems={props.education} />
            <Languages languageItems={props.languages} />
            <Interests interestItems={props.interests} />
        </div>
    )
}

export default Sidebar