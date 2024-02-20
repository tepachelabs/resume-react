'use client'

import React from 'react'

import Experience from '@/components/MainContent/Experience/Experience'
import Projects from '@/components/MainContent/Projects/Projects'
import Skills from '@/components/MainContent/Skills/Skills'
import Summary from '@/components/MainContent/Summary/Summary'

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
