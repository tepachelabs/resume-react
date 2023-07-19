import React, { useContext } from 'react'

import ResumeContext from '../../../context/ResumeContext'

function Skills () {
  const { skills } = useContext(ResumeContext)

  if (skills.length === 0) {
    return null
  }

  let skillsListRender = skills.map((item, index) => {
    const style = {
      width: `${item.value}%`,
    }
    return (
      <div key={index} className="item">
        <h3 className="level-title">{item.name}</h3>
        <div className="progress level-bar">
          {/*@ts-ignore*/}
          <div className="progress-bar theme-progress-bar" role="progressbar" style={style} aria-valuenow={item.value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    )
  })

  return (
    <section className="skills-section section">
      <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
      <div className="skillset">
        {skillsListRender}
      </div>
    </section>
  )
}

export default Skills
