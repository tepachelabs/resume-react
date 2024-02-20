'use client'

import React, { useContext } from 'react'

import DeveloperContext from '../../../context/DeveloperContext'

const languageItem = (item: DeveloperLanguage, index) => {
  return (
    <li key={index}>{item.name} <span className="lang-desc">({item.level})</span></li>
  )
}

const Languages = () => {
  const { languages } = useContext(DeveloperContext)

  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">Languages</h2>
      <ul className="list-unstyled interests-list">
        {languages.map(languageItem)}
      </ul>
    </div>
  )
}

export default Languages
