'use client'

import React from 'react'

import DeveloperContext from '@/context/DeveloperContext'
import ResumeContext from '@/context/ResumeContext'
import developer from '@/data/developer'
import resume from '@/data/resume'

export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <DeveloperContext.Provider value={developer}>
      <ResumeContext.Provider value={resume}>
        {children}
      </ResumeContext.Provider>
    </DeveloperContext.Provider>
  )
}
