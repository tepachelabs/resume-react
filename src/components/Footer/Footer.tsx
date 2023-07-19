import React, { ReactNode } from 'react'

// This template is free as long as you keep the footer attribution link.
// If you'd like to use the template without the attribution link, you can buy the commercial license via
// our website: themes.3rdwavemedia.com Thank you for your support. :)

function Footer () {
  return (
    <footer className="footer">
      <div className="text-center">
        <small className="copyright">
          Designed with <i className="fas fa-heart"/>&nbsp;
          by <ExternalLink href="http://themes.3rdwavemedia.com">Xiaoying Riley</ExternalLink> for developers
        </small>
        <br/>
        <small className="copyright">
          Coded with React and <i className="fas fa-heart"/>&nbsp;
          by <ExternalLink href="http://jmsalcido.dev">Jose Salcido</ExternalLink>
        </small>
      </div>
    </footer>
  )
}

export default Footer

const ExternalLink = ({ children, href }: {
  children: ReactNode,
  href: string
}) => (
  <a href={ href } target="_blank" rel="noopener noreferrer">{ children }</a>
)
