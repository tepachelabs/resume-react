import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import developer from './developer'
import resume from './resume'

function App() {
  return (
    <div className="Resume">
      <div className="Resume wrapper">
      <Sidebar profile={developer.profile} 
               contact={developer.contact}
               education={developer.education}
               languages={developer.languages}
               interests={developer.interests}
              />
      <MainContent summary={resume.summary}
                    experience={resume.experiences}
                    projects={resume.projects}
                    skills={resume.skills}
              />
      </div>
      <Footer />
    </div>
  );
}

export default App;
