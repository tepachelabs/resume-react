import React from 'react';

// ** Next
import Head from "next/head"

// ** Components
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';

// ** Developer Information
import developer from '../developer'
import resume from '../resume'

const HomePage = () => {

  return (
    <>
      <Head>
        <title>{developer.profile.name} - Resume</title>
      </Head>

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
    </>
  );
}

export default HomePage;
