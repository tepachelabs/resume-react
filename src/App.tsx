import React from 'react'

import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'
import DeveloperContext from './context/DeveloperContext'
import ResumeContext from './context/ResumeContext'
import developer from './developer'
import resume from './resume'

function App () {
  return (
    <DeveloperContext.Provider value={developer}>
      <ResumeContext.Provider value={resume}>
        <div className="Resume">
          <div className="Resume wrapper">
            <Sidebar />
            <MainContent />
          </div>
          <Footer />
        </div>
      </ResumeContext.Provider>
    </DeveloperContext.Provider>
  )
}

export default App
