import React from 'react'
import Summary from './Summary/Summary';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function MainContent(props) {
    return (
        <div className="main-wrapper">
            <Summary text={props.summary} />
            <Experience experienceItems={props.experience}/>
            <Projects projectItems={props.projects.items} header={props.projects.header}/>
            <Skills skillItems={props.skills} />
        </div>
    )
}

export default MainContent