import React, { useContext } from 'react'

import DeveloperContext from '../../../context/DeveloperContext'

const listItem = (name: string, faClass: string, href: string, blank: boolean, text = '', prop?: string) => {
  if (prop) {
    return (
      <li className={name}>
        <i className={faClass}></i>
        {blank ?
          <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
          :
          <a href={href}>{text}</a>
        }
      </li>
    )
  } else {
    return null
  }
}

const Contact = (props) => {
  const { contact } = useContext(DeveloperContext)

  const { email, github, linkedin, phone, twitter, website} = contact

  const renderEmail = listItem('email', 'fas fa-envelope', `mailto: ${email}`, false, email, email)
  const renderPhone = listItem('phone', 'fas fa-phone', `tel:${phone}`, false, phone, phone)
  const renderWebsite = listItem('website', 'fas fa-globe', website?.url ?? '', true, website?.url, website?.url)
  const renderLinkedin = listItem('linkedin', 'fab fa-linkedin-in', `https://linkedin.com/in/${linkedin}`, true, linkedin, linkedin)
  const renderGithub = listItem('github', 'fab fa-github', `https://github.com/${github}`, true, github, github)
  const renderTwitter = listItem('twitter', 'fab fa-twitter', `https://twitter.com/${twitter}`, true, `@${twitter}`, twitter)

  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        {renderEmail}
        {renderPhone}
        {renderWebsite}
        {renderLinkedin}
        {renderGithub}
        {renderTwitter}
      </ul>
    </div>
  )
}

export default Contact
