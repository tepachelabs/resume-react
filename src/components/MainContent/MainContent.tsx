import React from 'react'
import Summary from './Summary/Summary';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function MainContent() {
    return (
        <div className="main-wrapper">
            <Summary />
            <Experience />
            <Projects />
            <Skills />
        </div>
    )
}

export default MainContent
