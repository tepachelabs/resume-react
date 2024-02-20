'use client'

import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import ResumeContext from '@/context/ResumeContext'

function Summary () {
  const { summary } = useContext(ResumeContext)

  return (
    <section className="section summary-section">
      <h2 className="section-title">
        <span className="icon-holder">
          <i className="fas fa-user"/>
        </span>
        Career Profile
      </h2>
      <div className="summary">
        <ReactMarkdown>
          { summary }
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default Summary
