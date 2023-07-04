import React, { FC } from 'react'

interface Props {
  languages: Developer['languages'];
}

const Languages: FC<Props> = (props) => {
    const languageItem = (item: DeveloperLanguage, index) => {
        return (
            <li key={index}>{item.name} <span className="lang-desc">({item.level})</span></li>
        )
    }    

    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
                {props.languages.map(languageItem)}
            </ul>
        </div>
    )
}

export default Languages