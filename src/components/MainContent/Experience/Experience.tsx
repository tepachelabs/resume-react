'use client'

import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'

import ResumeContext from '@/context/ResumeContext'

function Experience () {
  const { experiences } = useContext(ResumeContext)

  const technologies = (item: Experience) => {
    if (!item.technologies) {
      return null
    }

    return (
      <div>
        <p><b>Technologies:</b></p>
        <ul>
          { item.technologies.map((item, index) =>
            <li key={ index }>{ item }</li>) }
        </ul>
      </div>
    )
  }

  const experienceItem = (item: Experience, index: number) => {
    return (
      <div key={ index } className="item">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">
              { item.position }
            </h3>
            <div className="time">
              { item.time }
            </div>
          </div>
          <div className="company">
            { item.company }, { item.location }
          </div>
        </div>
        <div className="details">
          <ReactMarkdown>
            { item.description }
          </ReactMarkdown>
          { technologies(item) }
        </div>
      </div>
    )
  }

  return (
    <section className="section experiences-section">
      <h2 className="section-title">
        <span className="icon-holder">
          <i className="fas fa-briefcase"/>
        </span>
        Experiences
      </h2>
      { experiences.map(experienceItem) }
    </section>
  )
}

export default Experience
