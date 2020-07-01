import React from 'react'

function Education(props) {

    const educationItem = (item, index) => {
        return (
            <div key={index} className="item">
                <h4 className="degree">{item.degree}</h4>
                <h5 className="meta">{item.school}</h5>
                    <div className="time">{item.time}</div>
            </div>
        )
    }

    return (
        <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {props.educationItems.map(educationItem)}
        </div>
    )
}

export default Education