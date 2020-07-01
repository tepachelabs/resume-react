import React from 'react';

function Skills(props) {
    if (!props.skillItems || props.skillItems.length === 0) {
        return null;
    }

    let skills = props.skillItems.map((item, index) => {
        const style = {
            width: `${item.value}%`
        }
        return (
            <div key={index} className="item">
                <h3 className="level-title">{item.name}</h3>
                <div className="progress level-bar">
                    <div className="progress-bar theme-progress-bar" role="progressbar" style={style} aria-valuenow={item.value} aria-valuemin="0" aria-valuemax="100"></div>
                </div>                                 
            </div>
        )
    });

    return (
        <section className="skills-section section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
            <div className="skillset">
                {skills}
            </div>
        </section>
    );
}

export default Skills;
