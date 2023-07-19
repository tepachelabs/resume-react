import React from 'react'

import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Summary from './Summary/Summary'

function MainContent () {
  return (
    <div className="main-wrapper">
      <Summary/>
      <Experience/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default MainContent
