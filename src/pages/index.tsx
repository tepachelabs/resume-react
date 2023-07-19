import Head from 'next/head'
import React from 'react'

import Footer from '../components/Footer/Footer'
import MainContent from '../components/MainContent/MainContent'
import Sidebar from '../components/Sidebar/Sidebar'
import developer from '../developer'
import resume from '../resume'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{ `${ developer.profile.name } - Resume` }</title>
      </Head>

      <div className="Resume">
        <div className="Resume wrapper">
          <Sidebar/>
          <MainContent/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
