import React from 'react'
import ReactMarkdown from 'react-markdown'

function Summary(props) {
    return (
        <section className="section summary-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
            <div className="summary">
                <ReactMarkdown source={props.text} />
            </div>
        </section>
    )
}

export default Summary;