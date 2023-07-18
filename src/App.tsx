import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import developer from './developer'
import resume from './resume'

// ** Context
import DeveloperContext from './context/DeveloperContext';
import ResumeContext from './context/ResumeContext';

function App() {
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
  );
}

export default App;
