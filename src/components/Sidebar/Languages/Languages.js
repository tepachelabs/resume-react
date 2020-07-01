import React from 'react'

function Languages(props){
    const languageItem = (item, index) => {
        return (
            <li key={index}>{item.name} <span className="lang-desc">({item.level})</span></li>
        )
    }    

    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
                {props.languageItems.map(languageItem)}
            </ul>
        </div>
    )
}

export default Languages