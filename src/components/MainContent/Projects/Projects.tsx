import React, { useContext, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'

import ResumeContext from '../../../context/ResumeContext';

function Projects() {
    const { projects,  } = useContext(ResumeContext);

    let header: ReactNode | null = null;
    if (projects.header) {
        header = (
            <div className="intro">
                <ReactMarkdown children={projects.header}/>
            </div>
        )
    }

    if (projects.items.length === 0) {
        return null;
    }

    let projectsListRender = projects.items.map((item, index) => {
        return (
            <div className="item" key={index}>
                <span className="project-title"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></span> - <span className="project-tagline">{item.description}</span>
            </div>
        )
    });

    return (
        <section className="section projects-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
            {header}
            {projectsListRender}
        </section>
    );
}

export default Projects;
